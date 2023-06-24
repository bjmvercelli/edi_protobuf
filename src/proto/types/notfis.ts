import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotifyServiceClient as _NotifyServiceClient, NotifyServiceDefinition as _NotifyServiceDefinition } from './NotifyService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Address: MessageTypeDefinition
  Customer: MessageTypeDefinition
  Item: MessageTypeDefinition
  NotifyService: SubtypeConstructor<typeof grpc.Client, _NotifyServiceClient> & { service: _NotifyServiceDefinition }
  Order: MessageTypeDefinition
  Request: MessageTypeDefinition
  Response: MessageTypeDefinition
  TransportOrder: MessageTypeDefinition
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

