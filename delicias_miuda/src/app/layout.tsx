import "./globals.css";

import { Yanone_Kaffeesatz } from 'next/font/google'
 
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
    <html lang="pt-br">
      <body className={`${yanone.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
