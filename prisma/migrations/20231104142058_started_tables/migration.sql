-- CreateEnum
CREATE TYPE "TypeFood" AS ENUM ('proteins', 'vegetables', 'carbohydrates');

-- CreateTable
CREATE TABLE "menufoods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menufoods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TypeFood" NOT NULL DEFAULT 'carbohydrates',
    "menuId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menufoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
