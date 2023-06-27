// Original file: src/proto/notfis.proto

import type { Order as _Order, Order__Output as _Order__Output } from './Order';
import type { SERVICES as _SERVICES, SERVICES__Output as _SERVICES__Output } from './SERVICES';

export interface CreateOrderRequest {
  'order'?: (_Order | null);
  'service'?: (_SERVICES);
}

export interface CreateOrderRequest__Output {
  'order': (_Order__Output | null);
  'service': (_SERVICES__Output);
}
