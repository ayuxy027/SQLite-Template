-- CreateTable
CREATE TABLE "counter" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "counter_pkey" PRIMARY KEY ("id")
);
