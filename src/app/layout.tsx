import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blob",
  description: "Clima e Tempo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/blob.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
