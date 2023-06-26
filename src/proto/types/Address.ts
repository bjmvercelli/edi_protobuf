// Original file: src/proto/notfis.proto


export interface Address {
  'street'?: (string);
  'district'?: (string);
  'number'?: (number);
  'city'?: (string);
  'cep'?: (string);
  'complement'?: (string);
}

export interface Address__Output {
  'street': (string);
  'district': (string);
  'number': (number);
  'city': (string);
  'cep': (string);
  'complement': (string);
}
