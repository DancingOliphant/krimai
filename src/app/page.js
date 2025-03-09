import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Krimai</h1>
      <p className="mb-4">Your AI assistant for the modern workplace</p>
      
      <div className="flex flex-col space-y-4 mt-8">
        <h2 className="text-2xl font-bold">Navigation</h2>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/features" className="text-blue-500 hover:underline">Features</Link>
        <Link href="/pricing" className="text-blue-500 hover:underline">Pricing</Link>
        <Link href="/blog" className="text-blue-500 hover:underline">Blog</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
        <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
        <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
      </div>
    </div>
  );
}
