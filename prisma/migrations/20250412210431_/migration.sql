/*
  Warnings:

  - You are about to drop the column `aditionalInfo` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `cancellationReason` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `specialty` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "aditionalInfo",
DROP COLUMN "cancellationReason",
DROP COLUMN "specialty",
ADD COLUMN     "amount" DOUBLE PRECISION,
ADD COLUMN     "betType" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "outcome" TEXT;

-- DropEnum
DROP TYPE "RegTypeForm";
