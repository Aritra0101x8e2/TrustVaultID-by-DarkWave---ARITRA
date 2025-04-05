
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <NavBar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-cyan-400 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          
          <p className="text-white/70 text-lg mb-12">
            This is a placeholder for the Features page. Explore our blockchain identity verification features below.
          </p>
          
          <div className="p-16 glass-card rounded-xl flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-white/70 mb-6">
                We're currently building this page. Check back soon!
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
