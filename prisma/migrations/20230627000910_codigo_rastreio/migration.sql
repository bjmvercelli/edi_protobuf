/*
  Warnings:

  - Added the required column `codigo_rastreio` to the `rastreio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rastreio" ADD COLUMN     "codigo_rastreio" VARCHAR(100) NOT NULL;
