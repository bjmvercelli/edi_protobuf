// Original file: src/proto/notfis.proto

import type { Item as _Item, Item__Output as _Item__Output } from './Item';
import type { Address as _Address, Address__Output as _Address__Output } from './Address';

export interface ShippingRequest {
  'items'?: (_Item)[];
  'shippingAddress'?: (_Address | null);
}

export interface ShippingRequest__Output {
  'items': (_Item__Output)[];
  'shippingAddress': (_Address__Output | null);
}
