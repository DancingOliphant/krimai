import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Krimai</h1>
      <p className="text-xl mb-8">Your AI solution provider</p>
      
      <div className="flex gap-4">
        <Link 
          href="/about" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          About Us
        </Link>
        <Link 
          href="/contact" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
