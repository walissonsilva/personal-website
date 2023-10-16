import { Providers } from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
