import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";
import { InteractiveBackdrop } from "@/components/effects/InteractiveBackdrop";
import { siteConfig } from "@/config/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.expert}`,
  description:
    "Entre na comunidade do Protocolo Medida dos Sonhos e acompanhe os próximos passos do lançamento focado em definição feminina.",
  icons: {
    icon: "/icon"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${jakarta.variable} ${cormorant.variable}`}>
        <InteractiveBackdrop />
        {children}
      </body>
    </html>
  );
}
