
import { ShoppingBag, Search, User, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            K-Beauty
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-pink-200 transition-colors duration-300 font-medium">
              Skincare
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors duration-300 font-medium">
              Makeup
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors duration-300 font-medium">
              Hair Care
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors duration-300 font-medium">
              Tools
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors duration-300 font-medium">
              Sale
            </a>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-pink-200 transition-colors duration-300 p-2 border border-white/30 rounded-full hover:border-pink-200">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-pink-200 transition-colors duration-300 p-2 border border-white/30 rounded-full hover:border-pink-200">
              <Heart size={20} />
            </button>
            <button className="text-white hover:text-pink-200 transition-colors duration-300 p-2 border border-white/30 rounded-full hover:border-pink-200">
              <User size={20} />
            </button>
            <button className="text-white hover:text-pink-200 transition-colors duration-300 p-2 border border-white/30 rounded-full hover:border-pink-200 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-pink-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
