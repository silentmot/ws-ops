import { PrismaClient } from '@prisma/client';
import {
  MATERIALS,
  EQUIPMENT,
  ROLES,
  DEFAULT_SITE_CODE,
} from '@deskops/constants';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('🌱 Starting database seed...');

  // Seed Default Site
  const site = await prisma.site.upsert({
    where: { code: DEFAULT_SITE_CODE },
    update: {},
    create: {
      code: DEFAULT_SITE_CODE,
      name: 'Al Asla Recycling Facility',
      location: 'Jeddah, Saudi Arabia',
      timezone: 'Asia/Riyadh',
      isActive: true,
    },
  });

  console.log(`✅ Seeded site: ${site.code}`);

  // Seed Materials
  let materialCount = 0;
  for (const material of MATERIALS) {
    await prisma.material.upsert({
      where: { id: material.id },
      update: {
        code: material.code,
        type: material.type,
        name: material.name,
        category: material.category,
        uom: material.uom,
        isFinal: material.isFinal,
        notes: material.notes,
      },
      create: {
        id: material.id,
        code: material.code,
        type: material.type,
        name: material.name,
        category: material.category,
        uom: material.uom,
        isFinal: material.isFinal,
        notes: material.notes,
      },
    });
    materialCount++;
  }

  console.log(`✅ Seeded ${materialCount} materials`);

  // Seed Equipment
  let equipmentCount = 0;
  for (const equipment of EQUIPMENT) {
    await prisma.equipment.upsert({
      where: { id: equipment.id },
      update: {
        code: equipment.code,
        name: equipment.name,
        type: equipment.type,
      },
      create: {
        id: equipment.id,
        code: equipment.code,
        name: equipment.name,
        type: equipment.type,
      },
    });
    equipmentCount++;
  }

  console.log(`✅ Seeded ${equipmentCount} equipment items`);

  // Seed Manpower Roles
  let roleCount = 0;
  for (const role of ROLES) {
    await prisma.manpowerRole.upsert({
      where: { code: role.code },
      update: {
        name: role.name,
      },
      create: {
        id: `ROLE_${role.code}`,
        code: role.code,
        name: role.name,
      },
    });
    roleCount++;
  }

  console.log(`✅ Seeded ${roleCount} manpower roles`);

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((error: Error) => {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
