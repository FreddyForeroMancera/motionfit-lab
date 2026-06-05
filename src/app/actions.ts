"use server";

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createLead(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;

    if (!name || !email) {
      return { success: false, error: "Le nom et l'email sont requis." };
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone: phone || null,
        interest: interest || "Général",
        message: message || null,
      },
    });

    return { success: true, lead };
  } catch (error) {
    console.error("Erreur lors de la création du lead:", error);
    return { success: false, error: "Une erreur est survenue. Veuillez réessayer." };
  }
}
