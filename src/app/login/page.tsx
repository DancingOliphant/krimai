import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            />
          </div>
          
          <div className="flex justify-between">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300">
              Forgot password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Sign in
          </button>
        </form>
        
        <div className="mt-6 space-y-4">
          <div className="relative">
            <a 
              href="#" 
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p>Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
