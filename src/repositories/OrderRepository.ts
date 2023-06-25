import { PrismaClient, pedido as TPedido } from "@prisma/client";

interface IOrderRepository {
  create: (order: TPedido) => Promise<void>;
}

export class OrderRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async create(order: TPedido): Promise<void> {
    const {
      cliente_id,
      data_pedido,
      valor_total
    } = order;

    await this.client.pedido.create({
      data: {
        cliente_id,
        data_pedido,
        valor_total
      }
    })
  }

  // async list(): Promise<TPedido[]> {
  //   const orders = await this.client.order.findMany();

  //   return orders;
  // }
}