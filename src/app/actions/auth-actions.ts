"use server";

import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!name || !email || !password || !confirmPassword) {
    return { error: "Tous les champs sont obligatoires." };
  }

  if (password !== confirmPassword) {
    return { error: "Les mots de passe ne correspondent pas." };
  }

  if (password.length < 6) {
    return { error: "Le mot de passe doit contenir au moins 6 caractères." };
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Un compte avec cette adresse email existe déjà." };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with default values (ADMIN, NONE)
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN",
        plan: "NONE",
        status: "ACTIVE"
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to register user:", error);
    return { error: "Une erreur est survenue lors de l'inscription." };
  }
}
