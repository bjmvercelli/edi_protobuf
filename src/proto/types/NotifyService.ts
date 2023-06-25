// Original file: src/proto/notfis.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NotfisRequest as _NotfisRequest, NotfisRequest__Output as _NotfisRequest__Output } from './NotfisRequest';
import type { NotfisResponse as _NotfisResponse, NotfisResponse__Output as _NotfisResponse__Output } from './NotfisResponse';
import type { ShipmentRequest as _ShipmentRequest, ShipmentRequest__Output as _ShipmentRequest__Output } from './ShipmentRequest';
import type { ShipmentResponse as _ShipmentResponse, ShipmentResponse__Output as _ShipmentResponse__Output } from './ShipmentResponse';

export interface NotifyServiceClient extends grpc.Client {
  NotfisMessage(argument: _NotfisRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  NotfisMessage(argument: _NotfisRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  NotfisMessage(argument: _NotfisRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  NotfisMessage(argument: _NotfisRequest, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _NotfisRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _NotfisRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _NotfisRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _NotfisRequest, callback: grpc.requestCallback<_NotfisResponse__Output>): grpc.ClientUnaryCall;
  
  ShipmentInfos(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_ShipmentRequest, _ShipmentResponse__Output>;
  ShipmentInfos(options?: grpc.CallOptions): grpc.ClientDuplexStream<_ShipmentRequest, _ShipmentResponse__Output>;
  shipmentInfos(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_ShipmentRequest, _ShipmentResponse__Output>;
  shipmentInfos(options?: grpc.CallOptions): grpc.ClientDuplexStream<_ShipmentRequest, _ShipmentResponse__Output>;
  
}

export interface NotifyServiceHandlers extends grpc.UntypedServiceImplementation {
  NotfisMessage: grpc.handleUnaryCall<_NotfisRequest__Output, _NotfisResponse>;
  
  ShipmentInfos: grpc.handleBidiStreamingCall<_ShipmentRequest__Output, _ShipmentResponse>;
  
}

export interface NotifyServiceDefinition extends grpc.ServiceDefinition {
  NotfisMessage: MethodDefinition<_NotfisRequest, _NotfisResponse, _NotfisRequest__Output, _NotfisResponse__Output>
  ShipmentInfos: MethodDefinition<_ShipmentRequest, _ShipmentResponse, _ShipmentRequest__Output, _ShipmentResponse__Output>
}
