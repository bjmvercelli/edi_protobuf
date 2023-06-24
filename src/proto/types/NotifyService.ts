// Original file: src/proto/notfis.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Request as _Request, Request__Output as _Request__Output } from './Request';
import type { Response as _Response, Response__Output as _Response__Output } from './Response';

export interface NotifyServiceClient extends grpc.Client {
  NotfisMessage(argument: _Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  NotfisMessage(argument: _Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  NotfisMessage(argument: _Request, options: grpc.CallOptions, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  NotfisMessage(argument: _Request, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _Request, options: grpc.CallOptions, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  notfisMessage(argument: _Request, callback: grpc.requestCallback<_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface NotifyServiceHandlers extends grpc.UntypedServiceImplementation {
  NotfisMessage: grpc.handleUnaryCall<_Request__Output, _Response>;
  
}

export interface NotifyServiceDefinition extends grpc.ServiceDefinition {
  NotfisMessage: MethodDefinition<_Request, _Response, _Request__Output, _Response__Output>
}
