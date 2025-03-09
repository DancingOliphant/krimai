export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Krimai</h1>
      <p style={{ fontSize: '18px', marginBottom: '24px' }}>Your AI assistant for the modern workplace</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Navigation</h2>
        <a href="/about" style={{ color: '#3B82F6' }}>About</a>
        <a href="/features" style={{ color: '#3B82F6' }}>Features</a>
        <a href="/pricing" style={{ color: '#3B82F6' }}>Pricing</a>
        <a href="/blog" style={{ color: '#3B82F6' }}>Blog</a>
        <a href="/contact" style={{ color: '#3B82F6' }}>Contact</a>
      </div>
    </div>
  );
}
