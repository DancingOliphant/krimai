import Link from 'next/link';

// This would typically come from a CMS or API
const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  'getting-started-with-ai': {
    title: 'Getting Started with AI',
    date: 'March 5, 2025',
    content: `
      <p>Artificial Intelligence (AI) is transforming industries across the globe. For businesses looking to leverage this technology, it&apos;s important to understand the basics and how to get started.</p>
      
      <h2>What is AI?</h2>
      <p>At its core, AI refers to machines programmed to mimic human intelligence. This includes learning from experience, recognizing patterns, and making decisions. AI systems can process vast amounts of data and identify insights that would be impossible for humans to discover manually.</p>
      
      <h2>Types of AI</h2>
      <p>There are several types of AI that businesses can implement:</p>
      <ul>
        <li><strong>Machine Learning:</strong> Algorithms that can learn from data and improve over time</li>
        <li><strong>Natural Language Processing:</strong> Enables computers to understand human language</li>
        <li><strong>Computer Vision:</strong> Allows machines to interpret and understand visual information</li>
        <li><strong>Predictive Analytics:</strong> Uses historical data to forecast future outcomes</li>
      </ul>
    `
  },
  'machine-learning-basics': {
    title: 'Machine Learning Basics',
    date: 'March 1, 2025',
    content: `
      <p>Machine Learning (ML) is a subset of artificial intelligence that focuses on building systems that learn from data. This article covers the fundamentals of machine learning and its applications.</p>
      
      <h2>How Machine Learning Works</h2>
      <p>Machine learning algorithms use computational methods to &quot;learn&quot; information directly from data without relying on predetermined equations.</p>
    `
  },
  'future-of-ai': {
    title: 'The Future of AI',
    date: 'February 25, 2025',
    content: `
      <p>Artificial Intelligence is evolving at an unprecedented rate. This article explores emerging trends and future directions in AI technology.</p>
      
      <h2>Emerging Trends</h2>
      <p>Several key trends are shaping the future of AI.</p>
    `
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
        <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          ← Back to Blog
        </Link>
      </main>
    );
  }
  
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-2xl mx-auto">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </main>
  );
}
