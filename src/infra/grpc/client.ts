import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { PackageDefinition, loadSync } from '@grpc/proto-loader';

import { ProtoGrpcType } from '../../proto/types/notfis';
import { ShippingResponse } from '../../proto/types/ShippingResponse';
import { CreateOrderResponse } from '../../proto/types/CreateOrderResponse';
import { ShippingRequest } from '../../proto/types/ShippingRequest';
import { CreateOrderRequest } from '../../proto/types/CreateOrderRequest';
import { CancelOrderResponse } from '../../proto/types/CancelOrderResponse';
import { CancelOrderRequest } from '../../proto/types/CancelOrderRequest';

export class GrpcClient {
  private readonly packageDefinition: PackageDefinition;
  private readonly proto_path = __dirname + '/../../proto/notfis.proto';
  private readonly proto: ProtoGrpcType;
  private readonly target: string;
  private stub;

  constructor(target: string) {
    this.packageDefinition = loadSync(this.proto_path, { keepCase: false });
    this.proto = loadPackageDefinition(this.packageDefinition) as unknown as ProtoGrpcType;
    this.target = target;
    this.stub = new this.proto.EDIService(this.target, credentials.createInsecure());
  }
  
  shipmentInfo(payload: ShippingRequest): Promise<ShippingResponse> {
    console.log('Requisitando frete...');
    return new Promise((resolve) => {
      const call = this.stub.CalculateShipping(payload);

      call.on('data', (response: ShippingResponse) => {
        console.log('Frete requisitado com sucesso!');
        resolve(response);
      });

      call.on('error', (error: Error) => {
        throw new Error(error.message);
      });
    });
  }

  createOrder(order: CreateOrderRequest): Promise<CreateOrderResponse> {
    console.log('Criando pedido...');
    return new Promise(resolve => {
      this.stub.CreateOrder(order, (err, response?: CreateOrderResponse) => {
        if (err) {
          console.error(err);
          throw new Error(err.message);
        }
        console.log('Pedido criado com sucesso!');
        resolve(response as CreateOrderResponse);
      });
    });
  }

  cancelOrder(payload: CancelOrderRequest): Promise<CancelOrderResponse> {
    console.log('Cancelando pedido...');
    return new Promise(resolve => {
      this.stub.CancelOrder({ trackingCode: payload.trackingCode }, (err, response?: CancelOrderResponse) => {
        if (err) {
          console.error(err);
          throw new Error(err.message);
        }
        console.log('Pedido cancelado com sucesso!');
        resolve(response as CancelOrderResponse);
      });
    });
  }
}