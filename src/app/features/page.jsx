export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Features</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
            💬
          </div>
          <h3 className="text-xl font-bold mb-2">Advanced Conversational AI</h3>
          <p className="text-gray-400 mb-4">
            Our sophisticated language model understands context, follows complex instructions, and provides helpful responses.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Natural language understanding</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Context retention</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Personalized responses</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
            📄
          </div>
          <h3 className="text-xl font-bold mb-2">Document Intelligence</h3>
          <p className="text-gray-400 mb-4">
            Process, analyze, and extract insights from your documents with our powerful document intelligence capabilities.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Smart document summarization</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Key information extraction</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Multiple file format support</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
            ✍️
          </div>
          <h3 className="text-xl font-bold mb-2">Content Creation</h3>
          <p className="text-gray-400 mb-4">
            Generate high-quality written content for various purposes, from marketing copy to creative writing.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Blog posts and articles</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Marketing copy</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Email drafting</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-2xl">
            🔄
          </div>
          <h3 className="text-xl font-bold mb-2">Seamless Integrations</h3>
          <p className="text-gray-400 mb-4">
            Connect Krimai with your favorite tools and services for a streamlined workflow.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Integration with productivity tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>CRM connections</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Custom API support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
