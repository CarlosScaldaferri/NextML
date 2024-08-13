-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telephone" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "countryCode" INTEGER NOT NULL,
    "stateCode" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL,

    CONSTRAINT "Telephone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Path" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Path_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rule" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "pathId" INTEGER NOT NULL,
    "create" BOOLEAN NOT NULL,
    "read" BOOLEAN NOT NULL,
    "update" BOOLEAN NOT NULL,
    "delete" BOOLEAN NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telephone" ADD CONSTRAINT "Telephone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_pathId_fkey" FOREIGN KEY ("pathId") REFERENCES "Path"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
