import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      slug: 'getting-started-with-ai',
      title: 'Getting Started with AI',
      excerpt: 'A beginner's guide to understanding and implementing AI in your workflow.',
      date: 'March 5, 2025',
      category: 'Guides'
    },
    {
      slug: 'machine-learning-basics',
      title: 'Machine Learning Basics',
      excerpt: 'Learn the fundamental concepts of machine learning and how they apply to real-world scenarios.',
      date: 'March 1, 2025',
      category: 'Education'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
              <span className="text-sm bg-purple-700 rounded-full px-3 py-1">{post.category}</span>
              <h2 className="text-xl font-semibold mt-4 mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
