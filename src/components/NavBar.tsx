
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LockKeyholeIcon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-navy-700 bg-navy-900/95 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-400 flex items-center justify-center animate-pulse-glow">
            <LockKeyholeIcon size={18} className="text-navy-900" />
          </div>
          <span className="text-xl font-bold text-white">TrustVault<span className="text-cyan-500">ID</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white/80 hover:text-cyan-500 transition-colors">Home</Link>
          <Link to="/features" className="text-white/80 hover:text-cyan-500 transition-colors">Features</Link>
          <Link to="/about" className="text-white/80 hover:text-cyan-500 transition-colors">About</Link>
          <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10">
            Connect Wallet
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800 border-b border-navy-700">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link to="/" className="text-white/80 hover:text-cyan-500 transition-colors py-2">Home</Link>
            <Link to="/features" className="text-white/80 hover:text-cyan-500 transition-colors py-2">Features</Link>
            <Link to="/about" className="text-white/80 hover:text-cyan-500 transition-colors py-2">About</Link>
            <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 w-full">
              Connect Wallet
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
