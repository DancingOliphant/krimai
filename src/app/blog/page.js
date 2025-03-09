export default function Blog() {
  const posts = [
    { slug: 'getting-started-with-ai', title: 'Getting Started with AI' },
    { slug: 'machine-learning-basics', title: 'Machine Learning Basics' },
    { slug: 'future-of-ai', title: 'The Future of AI' }
  ];
  
  return (
    <div>
      <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Blog</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        {posts.map(post => (
          <div key={post.slug} style={{ padding: '16px', border: '1px solid #333', borderRadius: '4px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{post.title}</h2>
            <a href={`/blog/${post.slug}`} style={{ color: '#3B82F6' }}>
              Read more
            </a>
          </div>
        ))}
      </div>
      <a href="/" style={{ color: '#3B82F6' }}>← Back to Home</a>
    </div>
  );
}
