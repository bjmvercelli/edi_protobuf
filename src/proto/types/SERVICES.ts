// Original file: src/proto/notfis.proto

export const SERVICES = {
  OTHER: 'OTHER',
  PAC: 'PAC',
  SEDEX: 'SEDEX',
} as const;

export type SERVICES =
  | 'OTHER'
  | 0
  | 'PAC'
  | 1
  | 'SEDEX'
  | 2

export type SERVICES__Output = typeof SERVICES[keyof typeof SERVICES]
