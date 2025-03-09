import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-6">Welcome to Krimai</h1>
        <p className="text-xl mb-4">Your next-generation AI solution</p>
        <div className="mt-8">
          <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Learn More
          </Link>
          <Link href="/contact" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
