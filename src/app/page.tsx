'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              The Future of AI Assistance is Here
            </h1>
            <p 
              className={`text-xl md:text-2xl text-gray-300 mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Krimai combines advanced AI with intuitive design to transform how you work. Increase productivity, enhance creativity, and unlock new possibilities.
            </p>
            <div 
              className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition"
              >
                Get Started Free
              </Link>
              <Link 
                href="/demo" 
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition"
              >
                See Demo
              </Link>
            </div>
          </div>
          
          <div 
            className={`mt-16 md:mt-24 max-w-5xl mx-auto relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="relative w-full h-[300px] md:h-[500px] bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>AI Interface Demo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features</h2>
            <p className="text-gray-400 text-lg">Krimai comes with a suite of powerful features designed to enhance your productivity and creativity.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced AI Chat",
                description: "Engage with our sophisticated AI assistant that understands context and provides insightful responses.",
                icon: "💬",
              },
              {
                title: "Smart Document Analysis",
                description: "Extract insights, summarize content, and analyze documents with powerful AI capabilities.",
                icon: "📄",
              },
              {
                title: "Creative Content Generation",
                description: "Generate high-quality content, from marketing copy to creative writing, with our AI technology.",
                icon: "✍️",
              },
              {
                title: "Seamless Integrations",
                description: "Connect with your favorite tools and services for a streamlined workflow.",
                icon: "🔄",
              },
              {
                title: "Voice Interaction",
                description: "Talk to Krimai naturally with advanced voice recognition and synthesis.",
                icon: "🎤",
              },
              {
                title: "Powerful Analytics",
                description: "Gain insights into your usage patterns and productivity metrics.",
                icon: "📊",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Krimai Works</h2>
            <p className="text-gray-400 text-lg">Our powerful AI assistant is designed to be simple to use yet incredibly powerful.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Connect",
                description: "Sign up and connect Krimai to your existing workflows and tools.",
                number: "01",
              },
              {
                title: "Interact",
                description: "Chat, ask questions, or give commands to Krimai using natural language.",
                number: "02",
              },
              {
                title: "Transform",
                description: "Watch as Krimai transforms your productivity and helps you achieve more.",
                number: "03",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-bold text-gray-800">{step.number}</div>
                <div className="absolute inset-0 top-8 left-6">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
            <p className="text-gray-400 text-lg">Thousands of professionals trust Krimai for their AI assistance needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Krimai has transformed how I approach my daily tasks. It's like having a brilliant assistant by my side at all times.",
                author: "Sarah Johnson",
                title: "Marketing Director",
              },
              {
                quote: "The document analysis feature saves me hours of work every week. I can't imagine going back to my old workflow.",
                author: "Michael Chen",
                title: "Research Analyst",
              },
              {
                quote: "As a content creator, Krimai helps me break through creative blocks and explore new ideas I wouldn't have thought of otherwise.",
                author: "Alex Rivera",
                title: "Content Creator",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="mb-4 text-blue-400 text-3xl">"</div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of professionals who are already using Krimai to enhance their productivity and creativity.</p>
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition inline-block"
              >
                Get Started for Free
              </Link>
              <p className="mt-4 text-gray-400">No credit card required. Free 14-day trial.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
