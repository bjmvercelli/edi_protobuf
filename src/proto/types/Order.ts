// Original file: src/proto/notfis.proto

import type { Item as _Item, Item__Output as _Item__Output } from './Item';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from './google/protobuf/Timestamp';

export interface Order {
  'itens'?: (_Item)[];
  'totalPrice'?: (number | string);
  'date'?: (_google_protobuf_Timestamp | null);
}

export interface Order__Output {
  'itens': (_Item__Output)[];
  'totalPrice': (number);
  'date': (_google_protobuf_Timestamp__Output | null);
}
