// Original file: src/proto/notfis.proto

import type { Order as _Order, Order__Output as _Order__Output } from './Order';
import type { TransportOrder as _TransportOrder, TransportOrder__Output as _TransportOrder__Output } from './TransportOrder';
import type { Customer as _Customer, Customer__Output as _Customer__Output } from './Customer';
import type { Address as _Address, Address__Output as _Address__Output } from './Address';

export interface NotfisRequest {
  'order'?: (_Order | null);
  'transportOrder'?: (_TransportOrder | null);
  'customer'?: (_Customer | null);
  'address'?: (_Address | null);
}

export interface NotfisRequest__Output {
  'order': (_Order__Output | null);
  'transportOrder': (_TransportOrder__Output | null);
  'customer': (_Customer__Output | null);
  'address': (_Address__Output | null);
}
