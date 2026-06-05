"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Les champs nom, email et message sont obligatoires." };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        company: company || "",
        phone: phone || "",
        email,
        subject: subject || "Nouveau message de contact",
        message,
      },
    });
    
    // We could send an email notification here if needed
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create message:", error);
    return { error: "Une erreur est survenue lors de l'envoi du message." };
  }
}

export async function deleteMessage(id: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id },
    });
    revalidatePath("/admin/messages");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete message:", error);
    return { error: "Erreur lors de la suppression du message." };
  }
}
