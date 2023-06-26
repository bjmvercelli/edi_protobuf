// Original file: src/proto/notfis.proto

import type { Item as _Item, Item__Output as _Item__Output } from './Item';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from './google/protobuf/Timestamp';
import type { Customer as _Customer, Customer__Output as _Customer__Output } from './Customer';
import type { Address as _Address, Address__Output as _Address__Output } from './Address';

export interface Order {
  'items'?: (_Item)[];
  'totalPrice'?: (number | string);
  'date'?: (_google_protobuf_Timestamp | null);
  'customer'?: (_Customer | null);
  'shippingAddress'?: (_Address | null);
}

export interface Order__Output {
  'items': (_Item__Output)[];
  'totalPrice': (number);
  'date': (_google_protobuf_Timestamp__Output | null);
  'customer': (_Customer__Output | null);
  'shippingAddress': (_Address__Output | null);
}
