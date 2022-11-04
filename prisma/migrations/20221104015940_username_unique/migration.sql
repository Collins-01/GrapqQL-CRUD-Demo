/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `authors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "authors_username_key" ON "authors"("username");
