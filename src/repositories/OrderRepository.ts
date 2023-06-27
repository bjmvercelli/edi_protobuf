import { PrismaClient, pedido as Pedido } from "@prisma/client";

interface IOrderRepository {
  create: (order: TPedido) => Promise<number>;
  findById: (id: number) => Promise<Pedido | null>;
}

interface TPedido extends Omit<Pedido, 'id' | 'valor_total'> {
  valor_total: number;
  codigo_rastreio: string;
}

export class OrderRepository implements IOrderRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async create(order: TPedido): Promise<number> {
    const {
      cliente_id,
      data_pedido,
      valor_total,
    } = order;

    const { id } = await this.client.pedido.create({
      data: {
        cliente_id,
        data_pedido,
        valor_total,
        ordem_transporte: {
          create: {
            data_criacao: new Date(),
            data_limite: new Date(),
            data_prevista: new Date(),
            rastreio: {
              create: {
                codigo_rastreio: order.codigo_rastreio,
                status: "Aguardando_Coleta",
                cidade: 'São Paulo',
                estado: 'SP',
                atual: true,
              }
            }
          }
        }
      },
      select: {
        id: true
      }
    });

    return id;
  }

  async findById(id: number) {
    return await this.client.pedido.findUnique({
      where: {
        id
      },
      include: {
        ordem_transporte: {
          select: {
            rastreio: true
          }
        }
      }
    });
  }

}