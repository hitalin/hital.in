import './globals.css'
import type { Metadata } from "next";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "ひたりん(@hitalin)",
  description: "Medicine cures vulnerability, but vulnerability is the essence of humanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}