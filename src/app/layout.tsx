import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ひたりん',
  description: 'home security guard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}