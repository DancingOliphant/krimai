'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h1>
        <form className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
