/*
  Warnings:

  - The primary key for the `Ticker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ticker` on the `Ticker` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Ticker` DROP PRIMARY KEY,
    DROP COLUMN `ticker`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
