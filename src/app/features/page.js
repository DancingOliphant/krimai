export default function Features() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Explore the advanced capabilities that make Krimai the leading AI assistant for professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                💬
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Conversational AI</h3>
              <p className="text-gray-400 mb-6">
                Our sophisticated language model understands context, follows complex instructions, and provides helpful, accurate responses to your queries.
              </p>
              <ul className="space-y-3">
                {['Natural language understanding', 'Context retention across conversations', 'Personalized responses based on your preferences', 'Support for multiple languages'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                📄
              </div>
              <h3 className="text-2xl font-bold mb-4">Document Intelligence</h3>
              <p className="text-gray-400 mb-6">
                Process, analyze, and extract insights from your documents with our powerful document intelligence capabilities.
              </p>
              <ul className="space-y-3">
                {['Smart document summarization', 'Key information extraction', 'Document comparison and analysis', 'Multiple file format support'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                ✍️
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-400 mb-6">
                Generate high-quality written content for various purposes, from marketing copy to creative writing.
              </p>
              <ul className="space-y-3">
                {['Blog post and article generation', 'Marketing copy and social media content', 'Email drafting and refinement', 'Creative writing assistance'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                🔄
              </div>
              <h3 className="text-2xl font-bold mb-4">Seamless Integrations</h3>
              <p className="text-gray-400 mb-6">
                Connect Krimai with your favorite tools and services for a streamlined workflow.
              </p>
              <ul className="space-y-3">
                {['Integration with productivity tools', 'CRM and project management connections', 'Email and calendar synchronization', 'Custom API support'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                🎤
              </div>
              <h3 className="text-2xl font-bold mb-4">Voice Interaction</h3>
              <p className="text-gray-400 mb-6">
                Interact with Krimai using natural voice commands and receive spoken responses.
              </p>
              <ul className="space-y-3">
                {['Advanced speech recognition', 'Natural-sounding voice synthesis', 'Voice command processing', 'Multilingual voice support'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                🛡️
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy & Security</h3>
              <p className="text-gray-400 mb-6">
                Your data security and privacy are our top priorities with Krimai.
              </p>
              <ul className="space-y-3">
                {['End-to-end encryption', 'SOC 2 compliance', 'GDPR and privacy regulation adherence', 'Customizable data retention policies'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[120px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl p-12 max-w-5xl mx-auto border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Krimai Today</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start using Krimai now and discover how our powerful features can transform your workflow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/signup" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition"
                >
                  Get Started Free
                </a>
                <a 
                  href="/demo" 
                  className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
