import { GrpcClient } from "../infra/grpc/client";
import { Address } from "../proto/types/Address";
import { CreateOrderResponse } from "../proto/types/CreateOrderResponse";
import { Item } from "../proto/types/Item";
import { Order } from "../proto/types/Order";
import { SERVICES } from "../proto/types/SERVICES";
import { ClientRepository } from "../repositories/ClientRepository";
import { OrderRepository } from "../repositories/OrderRepository";

import { Timestamp } from "../proto/types/google/protobuf/Timestamp";

interface ICreateOrderService {
  execute: (payload: TCreateOrderBody) => Promise<CreateOrderResponse & { id: number }>;
}

type TCreateOrderBody = {
  customer: string;
  items: Item[];
  totalPrice: number;
  address: Address;
  deliveryTime: number;
}

export class CreateOrderService implements ICreateOrderService {
  private client: GrpcClient;
  private orderRepository: OrderRepository;
  private clientRepository: ClientRepository;

  constructor() {
    this.client = new GrpcClient('localhost:50051');
    this.orderRepository = new OrderRepository();
    this.clientRepository = new ClientRepository();
  }

  async execute(payload: TCreateOrderBody) {
    const customer = await this.clientRepository.getByEmail(payload.customer);

    const order: Order = {
      items: payload.items,
      totalPrice: payload.totalPrice,
      date: new Date() as Timestamp,
      customer: {
        id: customer?.id,
        name: customer?.nome,
        email: customer?.email,
        cpf: customer?.cpf,
        phonenumber: customer?.telefone,
      },
      shippingAddress: payload.address,
    }

    const transporterResponse = await this.client.createOrder({
      order,
      service: SERVICES.SEDEX,
      deliveryTime: payload.deliveryTime,
    });

    const id = await this.orderRepository.create({
			cliente_id: customer?.id as number,
			data_pedido: new Date(),
			valor_total: payload.totalPrice,
      codigo_rastreio: transporterResponse.trackingCode as string,
		});

    return {
      id,
      ...transporterResponse
    };
  }
}