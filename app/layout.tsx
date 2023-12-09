import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomer Abady",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full overflow-hidden" lang="en">
      <body className="flex flex-col h-full">
        <header>
          <Header />
        </header>
        <main className="m-5 h-[calc(100vh-100px)]">{children}</main>
      </body>
    </html>
  );
}
