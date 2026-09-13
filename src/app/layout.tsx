import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudioWeb X | Funis de Alta Conversão & Captação Automática de Clientes",
  description:
    "Descubra a estratégia para atrair clientes de forma automática. Multiplique o faturamento da sua empresa com landing pages e funis de resposta direta de alta performance.",
  keywords: [
    "funil de vendas",
    "landing page alta conversão",
    "captação de leads",
    "criação de sites",
    "resposta direta",
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
