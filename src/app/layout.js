export const metadata = {
  title: 'Krimai',
  description: 'AI assistant for the modern workplace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#111', color: '#fff', fontFamily: 'sans-serif', padding: '20px' }}>
        <header style={{ marginBottom: '20px' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '24px' }}>
            Krimai
          </a>
        </header>
        <main>{children}</main>
        <footer style={{ marginTop: '40px', color: '#666' }}>
          © {new Date().getFullYear()} Krimai
        </footer>
      </body>
    </html>
  );
}
