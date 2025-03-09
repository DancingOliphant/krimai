'use client';

import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>
        <form className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
