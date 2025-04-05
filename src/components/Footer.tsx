
import { LockKeyholeIcon, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-navy-700 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-400 flex items-center justify-center">
                <LockKeyholeIcon size={18} className="text-navy-900" />
              </div>
              <span className="text-xl font-bold text-white">TrustVault<span className="text-cyan-500">ID</span></span>
            </div>
            <p className="text-white/60 mb-4">
              Secure blockchain-powered identity verification for the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-cyan-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-white/60 hover:text-cyan-500 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-cyan-500 transition-colors">Pricing</Link></li>
              <li><Link to="/integrations" className="text-white/60 hover:text-cyan-500 transition-colors">Integrations</Link></li>
              <li><Link to="/roadmap" className="text-white/60 hover:text-cyan-500 transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-white/60 hover:text-cyan-500 transition-colors">Documentation</Link></li>
              <li><Link to="/api" className="text-white/60 hover:text-cyan-500 transition-colors">API Reference</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-cyan-500 transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-white/60 hover:text-cyan-500 transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/60 hover:text-cyan-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white/60 hover:text-cyan-500 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-cyan-500 transition-colors">Contact</Link></li>
              <li><Link to="/press" className="text-white/60 hover:text-cyan-500 transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2025 TrustVaultID by DarkWave - Aritra Kundu
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-white/60 text-sm hover:text-cyan-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 text-sm hover:text-cyan-500 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-white/60 text-sm hover:text-cyan-500 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
