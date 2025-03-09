import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krimai - AI Solutions',
  description: 'Providing cutting-edge AI solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Krimai</h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-auto">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Krimai. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
