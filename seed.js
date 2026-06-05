const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@motionfit-lab.com' },
    update: {},
    create: {
      email: 'admin@motionfit-lab.com',
      name: 'Administrador',
      password: hashedPassword,
    },
  });
  console.log("Admin user created/verified: admin@motionfit-lab.com / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
