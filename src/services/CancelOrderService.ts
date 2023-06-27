import { GrpcClient } from "../infra/grpc/client";
import { OrderRepository } from "../repositories/OrderRepository";
import { TrackingRepository } from "../repositories/TrackingRepository";

interface ICancelOrderService {
  execute(orderId: number): Promise<void>;
}

export class CancelOrderService implements ICancelOrderService {
  private client: GrpcClient;
  private orderRepository: OrderRepository;
  private trackingRepository: TrackingRepository;

  constructor() {
    this.client = new GrpcClient('localhost:50051');
    this.orderRepository = new OrderRepository();
    this.trackingRepository = new TrackingRepository();
  }

  async execute(orderId: number): Promise<void> {
    const order = await this.orderRepository.findById(orderId);

    const code = order?.ordem_transporte?.rastreio[0].codigo_rastreio;

    if (!code) {
      throw new Error('Código de rastreio não encontrado');
    }

    await this.trackingRepository.updateStatus(code, 'Cancelado');

    await this.client.cancelOrder({ trackingCode: code });
  }
}