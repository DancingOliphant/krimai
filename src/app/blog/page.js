import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      slug: 'getting-started-with-ai',
      title: 'Getting Started with AI',
      excerpt: 'A beginner's guide to understanding and implementing AI in your business.',
      date: 'March 5, 2025',
      category: 'Guides'
    },
    {
      slug: 'machine-learning-basics',
      title: 'Machine Learning Basics',
      excerpt: 'Learn the fundamental concepts of machine learning and how they apply to real-world scenarios.',
      date: 'March 1, 2025',
      category: 'Education'
    },
    {
      slug: 'future-of-ai',
      title: 'The Future of AI',
      excerpt: 'Exploring emerging trends and technologies that are shaping the future of artificial intelligence.',
      date: 'February 25, 2025',
      category: 'Trends'
    },
    {
      slug: 'ai-for-creative-professionals',
      title: 'AI for Creative Professionals',
      excerpt: 'How artists, writers, and designers can leverage AI to enhance their creative process.',
      date: 'February 20, 2025',
      category: 'Creativity'
    },
    {
      slug: 'enterprise-ai-adoption',
      title: 'Enterprise AI Adoption',
      excerpt: 'Strategies for large organizations to successfully implement AI solutions across departments.',
      date: 'February 15, 2025',
      category: 'Business'
    },
    {
      slug: 'ethical-considerations-in-ai',
      title: 'Ethical Considerations in AI',
      excerpt: 'Important ethical questions and frameworks for responsible AI development and deployment.',
      date: 'February 10, 2025',
      category: 'Ethics'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Insights, guides, and news about AI and how it can transform your work.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map(post => (
              <div key={post.slug} className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800 hover:border-blue-500/50 transition duration-300 flex flex-col">
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-400">{post.category}</span>
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 transition font-medium inline-flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest updates, articles, and news about AI advancements.
            </p>
            <form className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-r-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
