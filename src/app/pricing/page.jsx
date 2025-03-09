export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Pricing Plans</h1>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Free</h2>
          <p className="text-3xl font-bold mb-4">$0<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li>Basic features</li>
            <li>Limited usage</li>
            <li>Community support</li>
          </ul>
          <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg">Get Started</button>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-blue-500">
          <h2 className="text-xl font-bold mb-2">Pro</h2>
          <p className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li>All features</li>
            <li>Unlimited usage</li>
            <li>Priority support</li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg">Try Free</button>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Team</h2>
          <p className="text-3xl font-bold mb-4">$79<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="mb-6 space-y-2">
            <li>All Pro features</li>
            <li>Team collaboration</li>
            <li>Advanced security</li>
          </ul>
          <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg">Try Free</button>
        </div>
      </div>
    </div>
  );
}
