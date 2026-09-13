import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudioWeb X | Criação de Sites Profissionais de Alta Performance",
  description:
    "Desenvolvemos sites profissionais, landing pages e plataformas digitais de alta conversão. Design de nível internacional, ultra-rápido e focado em gerar clientes no WhatsApp.",
  keywords: [
    "criação de sites",
    "desenvolvimento de sites",
    "landing page profissional",
    "fazer site para empresa",
    "site institucional",
    "StudioWeb",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className="bg-[#08090c] text-slate-100 antialiased selection:bg-[#ff2e63] selection:text-white">
        {children}
      </body>
    </html>
  );
}
