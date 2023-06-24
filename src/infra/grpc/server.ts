import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';
import { loadSync, PackageDefinition } from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../proto/types/notfis';

export class GrpcServer {
  private server: Server;
  private proto: ProtoGrpcType;
  private packageDefinition: PackageDefinition;
  private readonly protoPath: string;
  private readonly port: string | number;

  constructor(port: string | number) {
    this.port = port;
    this.protoPath = __dirname + '/../proto/notfis.proto';
    this.packageDefinition = loadSync(this.protoPath);
    this.proto = loadPackageDefinition(this.packageDefinition) as unknown as ProtoGrpcType;
    this.server = new Server();
  }
  
  start() {
    this.server.addService(this.proto.NotifyService.service, {});
    this.server.bindAsync('0.0.0.0:' + this.port, ServerCredentials.createInsecure(), (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      this.server.start();
      console.log('gRPC server running on port:', port);
    });
  }
}