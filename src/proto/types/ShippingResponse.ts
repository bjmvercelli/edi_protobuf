// Original file: src/proto/notfis.proto


export interface ShippingResponse {
  'expectedDays'?: (number);
  'shippingCost'?: (number | string);
  'service'?: (string);
}

export interface ShippingResponse__Output {
  'expectedDays': (number);
  'shippingCost': (number);
  'service': (string);
}
