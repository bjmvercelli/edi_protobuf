import { loadPackageDefinition, credentials, Client } from '@grpc/grpc-js';
import { PackageDefinition, loadSync } from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../proto/types/notfis';

export class GrpcClient {
  private packageDefinition: PackageDefinition;
  private proto_path = __dirname + '/../proto/notfis.proto';
  private proto: ProtoGrpcType;
  private readonly target: string;
  private stub: Client;

  constructor(target: string) {
    this.packageDefinition = loadSync(this.proto_path, { keepCase: true });
    this.proto = loadPackageDefinition(this.packageDefinition) as unknown as ProtoGrpcType;
    this.target = target;
    this.stub = new this.proto.NotifyService(this.target, credentials.createInsecure()) as unknown as Client;
  }
  
  call() {
    return 'oi';
  }
}