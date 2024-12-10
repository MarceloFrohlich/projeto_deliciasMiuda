import "./globals.css";

import { Yanone_Kaffeesatz } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { Metadata } from "next";

const yanone = Yanone_Kaffeesatz({
  subsets: ['latin'],
  variable: '--font-yanone',
})

export const metadata: Metadata = {
  title: "Delicias Miúda - Confeitaria Artesanal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-rose-100/80">
      <body className={`${yanone.variable} `}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
