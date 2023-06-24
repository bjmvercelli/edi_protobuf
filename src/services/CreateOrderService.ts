import { GrpcClient } from "../infra/grpc/client";

interface ICreateOrderService {
  execute: () => Promise<any>;
}

export class CreateOrderService implements ICreateOrderService {
  private client: GrpcClient;

  constructor() {
    this.client = new GrpcClient('localhost:50051');
  }

  async execute() {
    
    return { message: "Hello World" };
  }
}