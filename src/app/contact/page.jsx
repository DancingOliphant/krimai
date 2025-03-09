export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
