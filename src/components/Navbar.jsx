import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";  
import { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query.trim()); // Search after delay
    }, 500); // 500ms delay for debounce

    return () => clearTimeout(delaySearch); // Cleanup timeout on every change
  }, [query, onSearch]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-600/40 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="sm:text-2xl lg:text-lg font-bold">🎬 MovieZone</Link>

      {/* Search Bar with Button */}
      <div className="flex items-center border border-gray-400 rounded-md bg-white/80">
        <Input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-8 sm:h-10 w-28 sm:w-40 lg:w-64 px-2 sm:px-3 text-black bg-transparent focus:ring-0 focus:outline-none"
        />
        <button 
          onClick={() => onSearch(query.trim())} 
          className="h-8 sm:h-10 px-2 sm:px-3 rounded-md bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
