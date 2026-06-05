import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MotionFit-Lab | Optimisez votre corps – Élevez votre performance",
  description: "MotionFit-Lab est un studio de mouvement, posture, entraînement fonctionnel et optimisation humaine.",
};

import AuthProvider from "../components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
