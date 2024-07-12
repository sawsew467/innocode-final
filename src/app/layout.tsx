import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MicrophoneContextProvider } from "@/components/context/MicrophoneContextProvider";
import { DeepgramContextProvider } from "@/components/context/DeepgramContextProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MicrophoneContextProvider>
        <DeepgramContextProvider>
          {" "}
          <body className={inter.className}>
            <TooltipProvider>{children}</TooltipProvider>
          </body>
        </DeepgramContextProvider>
      </MicrophoneContextProvider>
    </html>
  );
}
