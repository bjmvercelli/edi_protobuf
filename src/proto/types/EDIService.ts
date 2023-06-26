// Original file: src/proto/notfis.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelOrderRequest as _CancelOrderRequest, CancelOrderRequest__Output as _CancelOrderRequest__Output } from './CancelOrderRequest';
import type { CancelOrderResponse as _CancelOrderResponse, CancelOrderResponse__Output as _CancelOrderResponse__Output } from './CancelOrderResponse';
import type { CreateOrderResponse as _CreateOrderResponse, CreateOrderResponse__Output as _CreateOrderResponse__Output } from './CreateOrderResponse';
import type { Order as _Order, Order__Output as _Order__Output } from './Order';
import type { ShippingRequest as _ShippingRequest, ShippingRequest__Output as _ShippingRequest__Output } from './ShippingRequest';
import type { ShippingResponse as _ShippingResponse, ShippingResponse__Output as _ShippingResponse__Output } from './ShippingResponse';

export interface EDIServiceClient extends grpc.Client {
  CalculateShipping(argument: _ShippingRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ShippingResponse__Output>;
  CalculateShipping(argument: _ShippingRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_ShippingResponse__Output>;
  calculateShipping(argument: _ShippingRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ShippingResponse__Output>;
  calculateShipping(argument: _ShippingRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_ShippingResponse__Output>;
  
  CancelOrder(argument: _CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _CancelOrderRequest, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _CancelOrderRequest, callback: grpc.requestCallback<_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  
  CreateOrder(argument: _Order, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _Order, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _Order, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _Order, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _Order, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _Order, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _Order, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _Order, callback: grpc.requestCallback<_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EDIServiceHandlers extends grpc.UntypedServiceImplementation {
  CalculateShipping: grpc.handleServerStreamingCall<_ShippingRequest__Output, _ShippingResponse>;
  
  CancelOrder: grpc.handleUnaryCall<_CancelOrderRequest__Output, _CancelOrderResponse>;
  
  CreateOrder: grpc.handleUnaryCall<_Order__Output, _CreateOrderResponse>;
  
}

export interface EDIServiceDefinition extends grpc.ServiceDefinition {
  CalculateShipping: MethodDefinition<_ShippingRequest, _ShippingResponse, _ShippingRequest__Output, _ShippingResponse__Output>
  CancelOrder: MethodDefinition<_CancelOrderRequest, _CancelOrderResponse, _CancelOrderRequest__Output, _CancelOrderResponse__Output>
  CreateOrder: MethodDefinition<_Order, _CreateOrderResponse, _Order__Output, _CreateOrderResponse__Output>
}
