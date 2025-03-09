export function generateStaticParams() {
  return [
    { slug: 'getting-started-with-ai' },
    { slug: 'machine-learning-basics' },
    { slug: 'future-of-ai' }
  ];
}

export default function BlogPost({ params }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Post: {params.slug}</h1>
      <p>This is the content for the blog post with slug: {params.slug}</p>
      <a href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
        ← Back to Blog
      </a>
    </div>
  );
}
