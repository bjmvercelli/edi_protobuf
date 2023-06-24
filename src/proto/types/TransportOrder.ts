// Original file: src/proto/notfis.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from './google/protobuf/Timestamp';

export interface TransportOrder {
  'creationDate'?: (_google_protobuf_Timestamp | null);
  'expectedDate'?: (_google_protobuf_Timestamp | null);
  'limitDate'?: (_google_protobuf_Timestamp | null);
}

export interface TransportOrder__Output {
  'creationDate': (_google_protobuf_Timestamp__Output | null);
  'expectedDate': (_google_protobuf_Timestamp__Output | null);
  'limitDate': (_google_protobuf_Timestamp__Output | null);
}
