import { loadPackageDefinition, credentials, Client, ServiceError } from '@grpc/grpc-js';
import { PackageDefinition, loadSync } from '@grpc/proto-loader';

import { ProtoGrpcType } from '../../proto/types/notfis';
import { ShipmentResponse } from '../../proto/types/ShipmentResponse';
import { Address } from '../../proto/types/Address';
import { NotfisRequest } from '../../proto/types/NotfisRequest';
import { NotfisResponse } from '../../proto/types/NotfisResponse';

export class GrpcClient {
  private packageDefinition: PackageDefinition;
  private proto_path = __dirname + '/../proto/notfis.proto';
  private proto: ProtoGrpcType;
  private readonly target: string;
  private stub;

  constructor(target: string) {
    this.packageDefinition = loadSync(this.proto_path, { keepCase: true });
    this.proto = loadPackageDefinition(this.packageDefinition) as unknown as ProtoGrpcType;
    this.target = target;
    this.stub = new this.proto.NotifyService(this.target, credentials.createInsecure());
  }
  
  shipmentInfo(address: Address): ShipmentResponse {
    const stream = this.stub.ShipmentInfos();
    let response: ShipmentResponse = {};

    stream.write({ address });

    stream.on('data', (shipmentResponse: ShipmentResponse) => {
      console.log(shipmentResponse);
      response = shipmentResponse;
    });

    stream.on('error', (error: ServiceError) => {
      console.log(error);
    });

    stream.end();

    return response;
  }

  createOrder(order: NotfisRequest): NotfisResponse {
    let response: NotfisResponse | undefined = {};

    this.stub.NotfisMessage(order, (err, notfisResponse?: NotfisResponse) => {
      if (err) {
        console.error(err);
        return;
      }

      response = notfisResponse;
    });

    return response;
  }
}