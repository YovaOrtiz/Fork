/*
  Warnings:

  - Added the required column `salesPrice` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "salesPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedBy" TEXT NOT NULL;
