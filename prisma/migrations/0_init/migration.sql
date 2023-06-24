-- CreateEnum
CREATE TYPE "status_type" AS ENUM ('Aguardando Coleta', 'Enviado', 'Em Transporte', 'Entregue');

-- CreateTable
CREATE TABLE "cliente" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "cpf" VARCHAR(20) NOT NULL,
    "telefone" VARCHAR(30) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "login" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" INTEGER NOT NULL,
    "rua" VARCHAR(60) NOT NULL,
    "cidade" VARCHAR(40) NOT NULL,
    "cep" VARCHAR(20) NOT NULL,
    "bairro" VARCHAR(50) NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" VARCHAR(60),
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque" (
    "id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_pedido" (
    "id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco_unitario" DECIMAL NOT NULL,
    "pedido_id" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,

    CONSTRAINT "item_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordem_transporte" (
    "id" INTEGER NOT NULL,
    "data_criacao" DATE NOT NULL,
    "data_prevista" DATE NOT NULL,
    "data_limite" DATE NOT NULL,
    "pedido_id" INTEGER NOT NULL,

    CONSTRAINT "ordem_transporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" INTEGER NOT NULL,
    "data_pedido" DATE NOT NULL,
    "valor_total" DECIMAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "preco_unitario" DECIMAL NOT NULL,
    "transportadora_id" INTEGER NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rastreio" (
    "id" INTEGER NOT NULL,
    "status" "status_type",
    "cidade" VARCHAR(60) NOT NULL,
    "estado" VARCHAR(30) NOT NULL,
    "atual" BOOLEAN NOT NULL,
    "ordem_transporte_id" INTEGER NOT NULL,

    CONSTRAINT "rastreio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transportadora" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "cnpj" VARCHAR(30) NOT NULL,

    CONSTRAINT "transportadora_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_email_key" ON "cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cliente_login_key" ON "cliente"("login");

-- CreateIndex
CREATE UNIQUE INDEX "transportadora_cnpj_key" ON "transportadora"("cnpj");

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item_pedido" ADD CONSTRAINT "item_pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item_pedido" ADD CONSTRAINT "item_pedido_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordem_transporte" ADD CONSTRAINT "ordem_transporte_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_transportadora_id_fkey" FOREIGN KEY ("transportadora_id") REFERENCES "transportadora"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rastreio" ADD CONSTRAINT "rastreio_ordem_transporte_id_fkey" FOREIGN KEY ("ordem_transporte_id") REFERENCES "ordem_transporte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

