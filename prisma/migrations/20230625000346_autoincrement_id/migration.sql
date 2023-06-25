-- AlterTable
CREATE SEQUENCE cliente_id_seq;
ALTER TABLE "cliente" ALTER COLUMN "id" SET DEFAULT nextval('cliente_id_seq');
ALTER SEQUENCE cliente_id_seq OWNED BY "cliente"."id";

-- AlterTable
CREATE SEQUENCE endereco_id_seq;
ALTER TABLE "endereco" ALTER COLUMN "id" SET DEFAULT nextval('endereco_id_seq');
ALTER SEQUENCE endereco_id_seq OWNED BY "endereco"."id";

-- AlterTable
CREATE SEQUENCE estoque_id_seq;
ALTER TABLE "estoque" ALTER COLUMN "id" SET DEFAULT nextval('estoque_id_seq');
ALTER SEQUENCE estoque_id_seq OWNED BY "estoque"."id";

-- AlterTable
CREATE SEQUENCE item_pedido_id_seq;
ALTER TABLE "item_pedido" ALTER COLUMN "id" SET DEFAULT nextval('item_pedido_id_seq');
ALTER SEQUENCE item_pedido_id_seq OWNED BY "item_pedido"."id";

-- AlterTable
CREATE SEQUENCE ordem_transporte_id_seq;
ALTER TABLE "ordem_transporte" ALTER COLUMN "id" SET DEFAULT nextval('ordem_transporte_id_seq');
ALTER SEQUENCE ordem_transporte_id_seq OWNED BY "ordem_transporte"."id";

-- AlterTable
CREATE SEQUENCE pedido_id_seq;
ALTER TABLE "pedido" ALTER COLUMN "id" SET DEFAULT nextval('pedido_id_seq');
ALTER SEQUENCE pedido_id_seq OWNED BY "pedido"."id";

-- AlterTable
CREATE SEQUENCE produto_id_seq;
ALTER TABLE "produto" ALTER COLUMN "id" SET DEFAULT nextval('produto_id_seq');
ALTER SEQUENCE produto_id_seq OWNED BY "produto"."id";

-- AlterTable
CREATE SEQUENCE rastreio_id_seq;
ALTER TABLE "rastreio" ALTER COLUMN "id" SET DEFAULT nextval('rastreio_id_seq');
ALTER SEQUENCE rastreio_id_seq OWNED BY "rastreio"."id";

-- AlterTable
CREATE SEQUENCE transportadora_id_seq;
ALTER TABLE "transportadora" ALTER COLUMN "id" SET DEFAULT nextval('transportadora_id_seq');
ALTER SEQUENCE transportadora_id_seq OWNED BY "transportadora"."id";
