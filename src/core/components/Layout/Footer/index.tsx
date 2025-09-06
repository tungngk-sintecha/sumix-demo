export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                viewBox="0 0 16 16"
                className="w-8 h-8 text-pink-500"
                fill="currentColor"
              >
                <path d="M6 4h2v2H6V4zm2 2h2v2H8V6zm-2 2h2v2H6V8zm4-2h2v2h-2V6zm2 2h2v2h-2V8z"></path>
                <path d="M4 8h2v2H4V8zm-2 2h2v2H2v-2z"></path>
              </svg>
              <h3 className="text-2xl font-bold pixel-font tracking-wider">
                PAKKU
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your gateway to authentic Japanese products. From anime
              collectibles to the latest tech, we bring Japan's best directly to
              the world.
              <span className="text-pink-400">日本から世界へ！</span>
            </p>
            <div className="flex space-x-4">
              <svg
                viewBox="0 0 16 16"
                className="w-6 h-6 text-pink-400"
                fill="currentColor"
              >
                <path d="M6 4h2v2H6V4zm2 2h2v2H8V6zm-2 2h2v2H6V8zm4-2h2v2h-2V6zm2 2h2v2h-2V8z"></path>
                <path d="M4 8h2v2H4V8zm-2 2h2v2H2v-2z"></path>
              </svg>
              <svg
                viewBox="0 0 16 16"
                className="w-6 h-6 text-red-400"
                fill="currentColor"
              >
                <path d="M2 4h12v2H2V4zm1 2h2v8H3V6zm8 0h2v8h-2V6zm-4 2h2v6H7V8z"></path>
              </svg>
              <svg
                viewBox="0 0 16 16"
                className="w-6 h-6 text-blue-400"
                fill="currentColor"
              >
                <path d="M8 2h2v2H8V2zm-2 2h2v2H6V4zm2 2h2v2H8V6zm-2 2h2v2H6V8zm2 2h2v2H8v-2zm-4 2h2v2H4v-2zm6 0h2v2h-2v-2zm-6 2h8v2H4v-2z"></path>
              </svg>
              <svg
                viewBox="0 0 16 16"
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
              >
                <path d="M8 2h2v2H8V2zm-2 2h2v2H6V4zm4 0h2v2h-2V4zm-4 2h2v2H6V6zm4 0h2v2h-2V6zm-6 2h2v2H4V8zm8 0h2v2h-2V8zm-6 2h2v2H4v-2zm4 0h2v2H8v-2zm2 0h2v2h-2v-2z"></path>
              </svg>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 pixel-font">🛒 Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Product Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bulk Purchasing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Quality Inspection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  International Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About PAKKU
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 pixel-font">🎌 Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  🎮 Gaming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  📱 Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  👘 Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  🎭 Anime &amp; Manga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  🍜 Food &amp; Snacks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 pixel-text">
            © 2025 PAKKU. Made with ❤️ for Japan lovers worldwide.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
