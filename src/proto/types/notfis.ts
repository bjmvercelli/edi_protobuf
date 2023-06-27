import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { EDIServiceClient as _EDIServiceClient, EDIServiceDefinition as _EDIServiceDefinition } from './EDIService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Address: MessageTypeDefinition
  CancelOrderRequest: MessageTypeDefinition
  CancelOrderResponse: MessageTypeDefinition
  CreateOrderRequest: MessageTypeDefinition
  CreateOrderResponse: MessageTypeDefinition
  Customer: MessageTypeDefinition
  EDIService: SubtypeConstructor<typeof grpc.Client, _EDIServiceClient> & { service: _EDIServiceDefinition }
  Item: MessageTypeDefinition
  Order: MessageTypeDefinition
  SERVICES: EnumTypeDefinition
  ShippingRequest: MessageTypeDefinition
  ShippingResponse: MessageTypeDefinition
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

