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
              Choose the plan that's right for you, from individual users to enterprise teams.
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
          
          {/* Enterprise Plan */}
          <div className="max-w-6xl mx-auto mt-16 bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400">Custom solutions for large organizations with advanced needs.</p>
              </div>
              <div>
                <a href="/contact-sales" className="inline-block py-3 px-6 bg-white/10 hover:bg-white/20 text-center rounded-lg transition font-medium">
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Custom Integrations',
                  description: 'Connect Krimai to your existing systems and workflows.'
                },
                {
                  title: 'Enhanced Security',
                  description: 'Advanced security features including SSO, audit logs, and more.'
                },
                {
                  title: 'Dedicated Support',
                  description: 'Get priority support with a dedicated account manager.'
                }
              ].map((feature, index) => (
                <div key={index} className="border border-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Can I switch plans later?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes to your billing will be prorated.'
                },
                {
                  question: 'Is there a long-term contract?',
                  answer: 'No, all our plans are month-to-month with no long-term commitment required. You can cancel anytime.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, as well as PayPal. Enterprise customers may also pay by invoice.'
                },
                {
                  question: 'Do you offer educational or non-profit discounts?',
                  answer: 'Yes, we offer special pricing for educational institutions and non-profit organizations. Please contact our sales team for details.'
                },
                {
                  question: 'How secure is my data?',
                  answer: 'We take security very seriously. All data is encrypted in transit and at rest, and we follow industry best practices for data protection.'
                },
                {
                  question: 'What happens when my trial ends?',
                  answer: 'At the end of your 14-day trial, you'll be automatically switched to the paid plan you selected. We'll send you a reminder before charging your card.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
