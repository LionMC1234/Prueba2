import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModernNavbar } from "@/components/modern-navbar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aira - Chatbot Inteligente | IA Conversacional Avanzada",
  description:
    "Experimenta el poder de la inteligencia artificial con Aira, el chatbot más avanzado que transforma cada conversación en una experiencia extraordinaria.",
  keywords: ["chatbot", "inteligencia artificial", "IA", "conversacional", "automatización"],
  authors: [{ name: "Aira Team" }],
  openGraph: {
    title: "Aira - Chatbot Inteligente",
    description: "El futuro de la conversación inteligente está aquí",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aira - Chatbot Inteligente",
    description: "El futuro de la conversación inteligente está aquí",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModernNavbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
