import Link from 'next/link';

// Define blog posts for static generation
const blogPosts = {
  'getting-started-with-ai': {
    title: 'Getting Started with AI',
    date: 'March 5, 2025',
    category: 'Guides',
    content: `
      <p>Artificial Intelligence (AI) is transforming industries across the globe. For businesses looking to leverage this technology, it's important to understand the basics and how to get started.</p>
      
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
      
      <h2>Getting Started</h2>
      <p>If you're ready to implement AI in your business, here are some steps to get started:</p>
      <ol>
        <li>Define your business objectives and identify areas where AI could add value</li>
        <li>Evaluate your data infrastructure and ensure you have quality data</li>
        <li>Start with small, focused projects to demonstrate value</li>
        <li>Build or hire the necessary expertise</li>
        <li>Implement, measure results, and iterate</li>
      </ol>
      
      <p>By taking a strategic approach to AI implementation, businesses of all sizes can begin to harness the power of this transformative technology.</p>
    `
  },
  'machine-learning-basics': {
    title: 'Machine Learning Basics',
    date: 'March 1, 2025',
    category: 'Education',
    content: `
      <p>Machine Learning (ML) is a subset of artificial intelligence that focuses on building systems that learn from data. This article covers the fundamentals of machine learning and its applications.</p>
      
      <h2>How Machine Learning Works</h2>
      <p>Machine learning algorithms use computational methods to "learn" information directly from data without relying on predetermined equations. The algorithms adaptively improve their performance as the number of samples available for learning increases.</p>
      
      <h2>Types of Machine Learning</h2>
      <p>There are three main types of machine learning:</p>
      <ul>
        <li><strong>Supervised Learning:</strong> Algorithms are trained on labeled data, learning to map inputs to known outputs</li>
        <li><strong>Unsupervised Learning:</strong> Algorithms identify patterns in unlabeled data</li>
        <li><strong>Reinforcement Learning:</strong> Algorithms learn optimal actions through trial and error</li>
      </ul>
      
      <h2>Common Machine Learning Algorithms</h2>
      <p>Some commonly used machine learning algorithms include:</p>
      <ul>
        <li>Linear Regression</li>
        <li>Logistic Regression</li>
        <li>Decision Trees</li>
        <li>Random Forests</li>
        <li>Support Vector Machines</li>
        <li>Neural Networks</li>
      </ul>
      
      <p>Understanding these basics will help you begin exploring how machine learning can be applied to solve real-world problems in your organization.</p>
    `
  },
  'future-of-ai': {
    title: 'The Future of AI',
    date: 'February 25, 2025',
    category: 'Trends',
    content: `
      <p>Artificial Intelligence is evolving at an unprecedented rate. This article explores emerging trends and future directions in AI technology.</p>
      
      <h2>Emerging Trends</h2>
      <p>Several key trends are shaping the future of AI:</p>
      <ul>
        <li><strong>Multimodal AI:</strong> Systems that can process and understand multiple types of data (text, images, audio)</li>
        <li><strong>AI Transparency:</strong> Increased focus on explainable AI that can justify its decisions</li>
        <li><strong>AI Ethics:</strong> Development of frameworks to ensure AI is developed and used responsibly</li>
        <li><strong>Edge AI:</strong> Moving AI processing from the cloud to local devices</li>
        <li><strong>AI Collaboration:</strong> Systems designed to work alongside humans rather than replace them</li>
      </ul>
      
      <h2>Potential Impacts</h2>
      <p>These advancements will likely transform various aspects of society:</p>
      <ul>
        <li>Healthcare: Personalized medicine and advanced diagnostics</li>
        <li>Transportation: Autonomous vehicles and optimized logistics</li>
        <li>Education: Personalized learning experiences</li>
        <li>Environment: Enhanced climate modeling and resource management</li>
        <li>Work: Automation of routine tasks and creation of new types of jobs</li>
      </ul>
      
      <p>As AI continues to advance, organizations that stay informed about these trends will be better positioned to leverage the technology for competitive advantage.</p>
    `
  }
};

// Generate static params for the dynamic route
export function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({ slug }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];
  
  // Handle case where post doesn't exist
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
          <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col">
      {/* Blog Post Header */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition inline-flex items-center mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-gray-400">
              {post.date}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-2">
                {['AI', 'Technology', 'Machine Learning', 'Business'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Sarah Chen</h3>
                  <p className="text-gray-400 text-sm">AI Researcher and Content Writer at Krimai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, related]) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <span className="text-sm text-gray-400 mb-2 block">{related.date}</span>
                    <h3 className="font-bold mb-3">{related.title}</h3>
                    <Link 
                      href={`/blog/${key}`}
                      className="text-blue-400 hover:text-blue-300 transition inline-flex items-center text-sm"
                    >
                      Read article
                      <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
