import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToogleDarkMode from "./components/ToggleDarkMode";
import DrawerAppBar from "./components/AppNav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ukeme Wilson",
  description: "Ukeme's porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToogleDarkMode />
      <DrawerAppBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}

// className={inter.className}