import Link from 'next/link';

export default function Blog() {
  const posts = [
    { slug: 'getting-started-with-ai', title: 'Getting Started with AI' },
    { slug: 'machine-learning-basics', title: 'Machine Learning Basics' },
    { slug: 'future-of-ai', title: 'The Future of AI' }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.slug} className="border border-gray-700 p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
