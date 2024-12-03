import "./globals.css";

import { Yanone_Kaffeesatz } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

const yanone = Yanone_Kaffeesatz({
  subsets: ['latin'],
  variable: '--font-yanone',
})

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
