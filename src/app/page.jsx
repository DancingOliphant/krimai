import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Krimai</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Your AI assistant for the modern workplace. Increase productivity, enhance creativity, and unlock new possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
              Get Started Free
            </Link>
            <Link href="/demo" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium border border-white/20">
              See Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Powerful Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
                💬
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced AI Chat</h3>
              <p className="text-gray-400">
                Engage with our sophisticated AI assistant that understands context and provides insightful responses.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
                📄
              </div>
              <h3 className="text-xl font-bold mb-2">Document Analysis</h3>
              <p className="text-gray-400">
                Extract insights, summarize content, and analyze documents with powerful AI capabilities.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
                ✍️
              </div>
              <h3 className="text-xl font-bold mb-2">Content Generation</h3>
              <p className="text-gray-400">
                Generate high-quality content, from marketing copy to creative writing, with our AI technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Krimai to enhance their productivity.
          </p>
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-block">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
