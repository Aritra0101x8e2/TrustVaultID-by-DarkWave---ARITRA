
import { Button } from "@/components/ui/button";
import { ShieldCheckIcon, KeySquare, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-20 -right-28 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Secure your </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">digital identity</span>
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"> with blockchain</span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              Experience next-generation identity verification powered by immutable blockchain 
              technology. Own your credentials, control your data, and prevent fraud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center">
                <ShieldCheckIcon className="text-cyan-500 mr-2" />
                <span className="text-white/80">Fraud-proof</span>
              </div>
              <div className="flex items-center">
                <KeySquare className="text-cyan-500 mr-2" />
                <span className="text-white/80">Self-sovereign</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4 border border-cyan-500/30 rounded-2xl"></div>
              <div className="w-full h-full absolute -bottom-4 -right-4 border border-purple-500/30 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 p-8 rounded-2xl border border-navy-600 relative z-10 glowing-border">
                <div className="flex space-x-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-navy-900/50 rounded-lg border border-navy-700">
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <KeySquare size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Verified Credential</div>
                      <div className="text-sm text-white">
                        Digital Identity <span className="text-green-400">✓ Verified</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-navy-900/50 rounded-lg border border-navy-700">
                    <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <ShieldCheckIcon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Blockchain Secured</div>
                      <div className="text-sm text-white">
                        <span className="font-mono text-cyan-400">0x7f9...3d4f</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-white/80 text-xs mt-6">
                    Secured by TrustVault Blockchain Network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
