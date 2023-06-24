// Original file: src/proto/notfis.proto

import type { Long } from '@grpc/proto-loader';

export interface Item {
  'name'?: (string);
  'unitPrice'?: (number | string);
  'quantity'?: (number | string | Long);
}

export interface Item__Output {
  'name': (string);
  'unitPrice': (number);
  'quantity': (string);
}
