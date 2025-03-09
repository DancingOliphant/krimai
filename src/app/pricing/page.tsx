import React from 'react';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Pricing Plans</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="mb-6 space-y-2">
              <li>100 messages/month</li>
              <li>Basic features</li>
              <li>Single user</li>
            </ul>
            <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-4">$29</p>
            <ul className="mb-6 space-y-2">
              <li>Unlimited messages</li>
              <li>Advanced features</li>
              <li>Multiple users</li>
            </ul>
            <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <ul className="mb-6 space-y-2">
              <li>Unlimited everything</li>
              <li>Dedicated support</li>
              <li>Custom solutions</li>
            </ul>
            <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
