export default function Pricing() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="space-y-3 mb-6">
              <li>100 messages per month</li>
              <li>Basic AI features</li>
              <li>Single user</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
              Get Started
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-4">$29</p>
            <ul className="space-y-3 mb-6">
              <li>Unlimited messages</li>
              <li>Advanced AI features</li>
              <li>Priority support</li>
              <li>Multiple users</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
              Choose Pro
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-4">Contact Us</p>
            <ul className="space-y-3 mb-6">
              <li>Unlimited everything</li>
              <li>Custom solutions</li>
              <li>Dedicated support</li>
              <li>Advanced security</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
