import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionize Your Business with AI
            </h1>
            <p className="text-xl mb-8">
              Krimai provides cutting-edge AI solutions tailored to your specific needs.
              Transform how you work, analyze data, and make decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-white hover:text-blue-600 border-2 border-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-lg shadow-xl">
              <div className="w-full h-80 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">AI Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Custom machine learning solutions that learn from your data to make predictions and automate decisions.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-600">
                Extract meaningful insights from your data with our advanced analytics tools.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-600">
                Understand and generate human language with our sophisticated NLP models.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
