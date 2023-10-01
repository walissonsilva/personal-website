import { Layout } from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const poppins = Cairo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walisson Silva",
  description: "Desenvolvedor Full Stack e Professor de Programação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
