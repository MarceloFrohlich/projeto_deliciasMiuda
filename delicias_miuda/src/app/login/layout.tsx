import "../globals.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-[100vw] h-[100vh] overflow-y-auto fine-line-scrollbar relative font-sans">
          {children}
    </section>
  );
}
