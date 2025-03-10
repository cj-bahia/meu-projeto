"use client";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}