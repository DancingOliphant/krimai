export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Krimai</h3>
            <p>Making AI accessible for everyone</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>info@krimai.com</p>
            <p>© {new Date().getFullYear()} Krimai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
