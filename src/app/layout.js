import './globals.css';

export const metadata = {
  title: 'Krimai - AI Solutions',
  description: 'Powerful AI solutions for your business needs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        <header className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <a href="/" className="text-2xl font-bold">Krimai</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 p-4 mt-auto">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Krimai. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
