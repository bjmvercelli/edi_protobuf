/*
  Warnings:

  - A unique constraint covering the columns `[pedido_id]` on the table `ordem_transporte` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ordem_transporte_pedido_id_key" ON "ordem_transporte"("pedido_id");
