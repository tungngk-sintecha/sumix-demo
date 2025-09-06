import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShow(false);
      } else {
        // scrolling up → show navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-black/90 backdrop-blur-sm border-b border-cyan-500/30 
  fixed top-0 left-0 w-full z-50 transition-transform duration-300 
  ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <Link to="/">
              <button className="hover-lift press focus-glow ring-0 flex items-center space-x-3 transition-transform duration-200 hover:scale-105 cursor-pointer">
                <svg
                  viewBox="0 0 16 16"
                  className="w-8 h-8 text-pink-500"
                  fill="currentColor"
                >
                  <path d="M6 4h2v2H6V4zm2 2h2v2H8V6zm-2 2h2v2H6V8zm4-2h2v2h-2V6zm2 2h2v2h-2V8z"></path>
                  <path d="M4 8h2v2H4V8zm-2 2h2v2H2v-2z"></path>
                </svg>
                <h1 className="text-3xl font-bold neo-gradient pixel-font tracking-wider text-white">
                  PAKKU
                </h1>
              </button>
            </Link>

            <nav className="hidden lg:flex space-x-6">
              <button className="hover-lift press focus-glow ring-0 text-white hover:text-cyan-400 font-medium transition-all duration-200 hover:scale-105 pixel-text relative group">
                🔥 New Arrivals
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            </nav>
          </div>

          {/* Middle search section */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 items-center gap-4">
            <div className="w-full relative">
              <div className="relative flex items-stretch max-w-xl">
                <div className="relative">
                  <button
                    type="button"
                    className="h-10 px-3 text-sm bg-white/10 border border-white/20 text-white/80 rounded-l-lg hover:bg-white/20 inline-flex items-center gap-2 whitespace-nowrap"
                    title="Change search type"
                  >
                    <span>📝</span>
                    <span>Word</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down w-4 h-4 text-white/60 transition-transform"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-1">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder='Enter keywords like "Pokemon cards", "Sony camera"...'
                      className="h-10 flex-1 px-4 bg-white/10 border-y border-r border-l-0 border-white/20 text-white text-sm placeholder-white/40 focus-glow ring-0 rounded-r-none"
                    />
                    <Link to="/shop/products">
                      <button className="h-10 px-4 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-r-lg hover:from-cyan-400 hover:to-blue-400 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-search w-4 h-4"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Mobile search */}
            <button className="md:hidden hover-lift press focus-glow ring-0 p-2 hover:bg-white/10 rounded-lg transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search w-5 h-5 text-white/80"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>

            {/* Cart button */}
            <button className="inline-flex items-center justify-center rounded-xl hover-lift press focus-glow ring-0 border transition-all font-bold bg-cyan-500 text-black border-cyan-400/30 hover:bg-cyan-400 px-6 py-3 text-sm hidden md:flex items-center space-x-2 pixel-button relative overflow-hidden group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart w-4 h-4"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="font-medium">0</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>

            {/* Business button */}
            <div className="relative">
              <button className="hover-lift press focus-glow ring-0 hidden md:flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building w-5 h-5 text-white/80"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
                <span className="text-white/80 text-sm">For Business</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down w-4 h-4 text-white/60 transition-transform"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="hover-lift press focus-glow ring-0 text-white/80 hover:text-cyan-400 font-medium transition-all duration-200 px-4 py-2">
                Sign In
              </button>
              <button className="inline-flex items-center justify-center rounded-xl hover-lift press focus-glow ring-0 border transition-all font-bold bg-cyan-500 text-black border-cyan-400/30 hover:bg-cyan-400 px-6 py-3 text-sm pixel-button">
                Register
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="hover-lift press focus-glow ring-0 md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu w-6 h-6 text-white/80"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
