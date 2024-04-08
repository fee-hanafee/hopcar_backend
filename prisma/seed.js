const { PrismaClient } = require("@prisma/client");
const utils = require("../src/utils");
const prisma = new PrismaClient();

async function seeding() {
  const hashValue = await utils.bcrypt.hashed(process.env.ManagerPassword);
  await prisma.user.create({
    data: {
      email: "hobcar@gmail.com",
      password: hashValue,
      role: "Manager",
      firstName: "ADMIN",
      lastName: "ADMIN",
    },
  });
}

seeding();
