import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | MotionFit-Lab",
    default: "MotionFit-Lab | Optimisez votre corps – Élevez votre performance",
  },
  description: "MotionFit-Lab est un studio de mouvement, posture, entraînement fonctionnel et optimisation humaine.",
};

import AuthProvider from "../components/AuthProvider";
import FloatingSocial from "../components/FloatingSocial";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA">
      <body>
        <FloatingSocial />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
