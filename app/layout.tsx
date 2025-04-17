import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import {WalletComponent} from '@/components/wallet/WalletComponent';
import CustomContext from "@/context/CustomContext";
import "./css/style.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fable",
  description: "Creating better stories faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="icon" href="/logo/fable_black.png" sizes="any" />
      </head>
      <body
        className={`${nunitoSans.variable} antialiased bg-[#FBFBFB]`}
      >
        <WalletComponent>
          <CustomContext>        
            {children}
          </CustomContext>        
        </WalletComponent>
        
      </body>
    </html>
  );
}
