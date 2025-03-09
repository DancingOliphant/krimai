export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Choose the plan that&apos;s right for you, from individual users to enterprise teams.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col">
              <div className="p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Perfect for trying out Krimai and occasional personal use.</p>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    '100 messages per month',
                    'Basic AI features',
                    'Single user',
                    '5MB file uploads',
                    'Community support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border-t border-gray-800">
                <a href="/signup" className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-center rounded-lg transition font-medium">
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl overflow-hidden border border-blue-500/20 flex flex-col relative transform md:scale-105 md:-translate-y-2">
              <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-blue-500 to-purple-600 text-center py-2 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8 border-b border-gray-800 pt-12">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">For professionals who need powerful AI assistance daily.</p>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    'Unlimited messages',
                    'All advanced AI features',
                    'Priority response time',
                    '50MB file uploads',
                    'Email support',
                    'API access',
                    'Custom instructions'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border-t border-gray-800">
                <a href="/signup?plan=pro" className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-center rounded-lg transition font-medium shadow-lg shadow-blue-500/20">
                  Try Free for 14 Days
                </a>
              </div>
            </div>
            
            {/* Team Plan */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col">
              <div className="p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-4">Team</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">For teams that need to collaborate and share resources.</p>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    'Everything in Pro plan',
                    'Up to 5 team members',
                    'Shared workspaces',
                    'Collaborative documents',
                    'Team analytics dashboard',
                    'Admin controls',
                    'Dedicated support',
                    'Advanced security features'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border-t border-gray-800">
                <a href="/signup?plan=team" className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-center rounded-lg transition font-medium">
                  Try Free for 14 Days
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
