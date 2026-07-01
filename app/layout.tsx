import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEERESH BUILd",
  description: "WEB AND APP DEVELOPER"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
