import Link from 'next/link';

// Define a simpler blog posts object
const blogPosts = {
  'getting-started-with-ai': {
    title: 'Getting Started with AI',
    date: 'March 5, 2025',
    content: 'This is a simple blog post about getting started with AI.'
  },
  'machine-learning-basics': {
    title: 'Machine Learning Basics',
    date: 'March 1, 2025',
    content: 'This is a simple blog post about machine learning basics.'
  },
  'future-of-ai': {
    title: 'The Future of AI',
    date: 'February 25, 2025',
    content: 'This is a simple blog post about the future of AI.'
  }
};

// Generate static params for the dynamic route
export function generateStaticParams() {
  return [
    { slug: 'getting-started-with-ai' },
    { slug: 'machine-learning-basics' },
    { slug: 'future-of-ai' }
  ];
}

// Create the page component
export default function Page({ params }) {
  const slug = params.slug;
  const post = blogPosts[slug];
  
  if (!post) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
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
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}
