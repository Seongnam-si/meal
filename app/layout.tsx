import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "척척밥상",
  description: "척척밥상 주문서 과제 - 홍성남",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
