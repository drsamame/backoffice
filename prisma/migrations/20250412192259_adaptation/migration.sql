/*
  Warnings:

  - You are about to drop the column `patientId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `voucherDocumentUrl` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the `Patients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Patients" DROP CONSTRAINT "Patients_userId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "patientId",
DROP COLUMN "voucherDocumentUrl";

-- DropTable
DROP TABLE "Patients";
