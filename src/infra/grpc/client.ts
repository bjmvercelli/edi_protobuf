import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { PackageDefinition, loadSync } from '@grpc/proto-loader';

import { ProtoGrpcType } from '../../proto/types/notfis';
import { ShippingResponse } from '../../proto/types/ShippingResponse';
import { Order } from '../../proto/types/Order';
import { CreateOrderResponse } from '../../proto/types/CreateOrderResponse';
import { ShippingRequest } from '../../proto/types/ShippingRequest';

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
    return new Promise((resolve) => {
      const call = this.stub.CalculateShipping(payload);

      call.on('data', (response: ShippingResponse) => {
        resolve(response);
      });

      call.on('error', (error: Error) => {
        throw new Error(error.message);
      });
    });
  }

  createOrder(order: Order): CreateOrderResponse {
    let data: CreateOrderResponse | undefined = {};

    this.stub.CreateOrder(order, (err, response?: CreateOrderResponse) => {
      if (err) {
        console.error(err);
        return;
      }

      data = response;
    });

    return data;
  }
}