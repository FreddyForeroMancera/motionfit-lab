"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";
import path from "path";

async function processImageUpload(formData: FormData, currentImageUrl: string) {
  const imageFile = formData.get("imageFile") as File;
  let finalImageUrl = currentImageUrl;

  if (imageFile && imageFile.size > 0 && imageFile.name !== "undefined") {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create a unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const originalName = imageFile.name.replace(/[^a-zA-Z0-9.-]/g, '');
    const filename = `${uniqueSuffix}-${originalName}`;
    
    const filepath = path.join(process.cwd(), "public", "uploads", filename);
    await writeFile(filepath, buffer);
    
    finalImageUrl = `/uploads/${filename}`;
  }

  return finalImageUrl;
}

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const date = formData.get("date") as string;
  
  const imageUrlStr = formData.get("imageUrl") as string;
  const finalImageUrl = await processImageUpload(formData, imageUrlStr);

  if (!title || !slug || !content) {
    return { error: "Titre, slug et contenu sont obligatoires." };
  }

  try {
    await prisma.article.create({
      data: {
        title,
        slug,
        excerpt: excerpt || "",
        content,
        imageUrl: finalImageUrl || "",
        category: category || "Non classé",
        date: date || new Date().toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' }),
      },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: "Ce slug existe déjà. Veuillez en choisir un autre." };
    }
    console.error("Failed to create article:", error);
    return { error: "Erreur lors de la création de l'article." };
  }

  revalidatePath("/admin/articles");
  revalidatePath("/articles");
  redirect("/admin/articles");
}

export async function updateArticle(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const date = formData.get("date") as string;

  const imageUrlStr = formData.get("imageUrl") as string;
  const finalImageUrl = await processImageUpload(formData, imageUrlStr);

  if (!title || !slug || !content) {
    return { error: "Titre, slug et contenu sont obligatoires." };
  }

  try {
    await prisma.article.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt: excerpt || "",
        content,
        imageUrl: finalImageUrl || "",
        category: category || "Non classé",
        date: date || new Date().toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' }),
      },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: "Ce slug existe déjà. Veuillez en choisir un autre." };
    }
    console.error("Failed to update article:", error);
    return { error: "Erreur lors de la mise à jour de l'article." };
  }

  revalidatePath("/admin/articles");
  revalidatePath("/articles");
  revalidatePath(`/articles/${slug}`);
  redirect("/admin/articles");
}

export async function deleteArticle(id: string) {
  try {
    await prisma.article.delete({
      where: { id },
    });
    revalidatePath("/admin/articles");
    revalidatePath("/articles");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete article:", error);
    return { error: "Erreur lors de la suppression de l'article." };
  }
}
