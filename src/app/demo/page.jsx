'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Demo() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m Krimai, your AI assistant. How can I help you today?'
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response;
      
      // Generate different responses based on the input
      if (inputValue.toLowerCase().includes('hello') || inputValue.toLowerCase().includes('hi')) {
        response = { role: 'assistant', content: 'Hello there! How can I assist you today?' };
      } else if (inputValue.toLowerCase().includes('help')) {
        response = { role: 'assistant', content: 'I\'d be happy to help! I can answer questions, provide information, generate content, and much more.' };
      } else if (inputValue.toLowerCase().includes('feature') || inputValue.toLowerCase().includes('do')) {
        response = { role: 'assistant', content: 'Krimai offers several powerful features including conversational AI, document analysis, content generation, and more.' };
      } else if (inputValue.toLowerCase().includes('price') || inputValue.toLowerCase().includes('cost')) {
        response = { role: 'assistant', content: 'Krimai offers flexible pricing plans starting with a free tier for basic usage. Our Pro plan is $29/month.' };
      } else {
        response = { role: 'assistant', content: 'Thanks for your message! Is there anything specific about Krimai you\'d like to know?' };
      }
      
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1500);
  };

  const predefinedQuestions = [
    "What features does Krimai offer?",
    "How can Krimai help with content creation?",
    "What pricing plans are available?",
    "Can Krimai integrate with other tools?"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Try Krimai Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Experience the power of our AI assistant with this interactive demo.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-10 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-gray-800 p-4 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl">K</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Krimai Assistant</h3>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-xs text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 
                        ${message.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-800 border border-gray-700 rounded-tl-none'
                        }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-gray-800 border border-gray-700 rounded-tl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Suggested Questions */}
              <div className="bg-gray-800 p-4 border-t border-gray-700 overflow-x-auto">
                <div className="flex space-x-2">
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(question);
                        document.getElementById('chatInput').focus();
                      }}
                      className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 rounded-full px-4 py-2 text-sm transition whitespace-nowrap"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-gray-700">
                <form onSubmit={handleSubmit} className="flex space-x-3">
                  <input
                    id="chatInput"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask anything..."
                    className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-4 py-2 font-medium hover:shadow-lg hover:shadow-blue-500/20 transition"
                    disabled={isLoading || !inputValue.trim()}
                  >
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to experience the full power of Krimai?</h2>
            <p className="text-xl text-gray-300 mb-8">
              This is just a demo. Sign up now to access all features and start transforming your workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition"
              >
                Get Started Free
              </Link>
              <Link 
                href="/pricing" 
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
