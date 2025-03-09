import Link from 'next/link';

// This would typically come from a CMS or API
const blogPosts = [
  {
    slug: 'getting-started-with-ai',
    title: 'Getting Started with AI',
    excerpt: 'A beginners guide to understanding and implementing AI in your business.',
    date: 'March 5, 2025'
  },
  {
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    excerpt: 'Learn the fundamental concepts of machine learning and how they apply to real-world scenarios.',
    date: 'March 1, 2025'
  },
  {
    slug: 'future-of-ai',
    title: 'The Future of AI',
    excerpt: 'Exploring emerging trends and technologies that are shaping the future of artificial intelligence.',
    date: 'February 25, 2025'
  }
];

export default function Blog() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Blog Image</span>
            </div>
            <div className="p-6">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
