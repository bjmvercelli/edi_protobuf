// Original file: src/proto/helloworld.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _HelloReply, HelloReplyOutput as _HelloReplyOutput } from './HelloReply';
import type { HelloRequest as _HelloRequest, HelloRequestOutput as _HelloRequestOutput } from './HelloRequest';

export interface GreeterClient extends grpc.Client {
  SayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloReplyOutput>): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_HelloRequestOutput, _HelloReply>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_HelloRequest, _HelloReply, _HelloRequestOutput, _HelloReplyOutput>
}
