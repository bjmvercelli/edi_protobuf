import { loadPackageDefinition, Server, ServerCredentials, ServerWritableStream } from '@grpc/grpc-js';
import { loadSync, PackageDefinition } from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../proto/types/notfis';
import { ShippingRequest } from '../../proto/types/ShippingRequest';
import { ShippingResponse } from '../../proto/types/ShippingResponse';

export class GrpcServer {
  private server: Server;
  private readonly proto: ProtoGrpcType;
  private readonly packageDefinition: PackageDefinition;
  private readonly protoPath: string;
  private readonly port: string | number;

  constructor(port: string | number) {
    this.port = port;
    this.protoPath = __dirname + '/../../proto/notfis.proto';
    this.packageDefinition = loadSync(this.protoPath);
    this.proto = loadPackageDefinition(this.packageDefinition) as unknown as ProtoGrpcType;
    this.server = new Server();
  }
  
  start() {
    this.server.addService(this.proto.EDIService.service, {
      CalculateShipping: this.CalculateShipping
    });
    this.server.bindAsync('0.0.0.0:' + this.port, ServerCredentials.createInsecure(), (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      this.server.start();
      console.log('gRPC server running on port:', port);
    });
  }

  CalculateShipping(call: ServerWritableStream<ShippingRequest, ShippingResponse>) {
    call.write({
      expectedDays: 5,
      shippingCost: 10.00,
      service: 'SEDEX'
    })
  }
}