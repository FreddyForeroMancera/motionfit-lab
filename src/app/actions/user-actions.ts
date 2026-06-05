"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateUser(id: string, formData: FormData) {
  const role = formData.get("role") as string;
  const plan = formData.get("plan") as string;
  const status = formData.get("status") as string;

  try {
    await prisma.user.update({
      where: { id },
      data: {
        role,
        plan,
        status,
      },
    });
    
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Failed to update user:", error);
    return { error: "Erreur lors de la mise à jour de l'utilisateur." };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete user:", error);
    return { error: "Erreur lors de la suppression de l'utilisateur." };
  }
}
