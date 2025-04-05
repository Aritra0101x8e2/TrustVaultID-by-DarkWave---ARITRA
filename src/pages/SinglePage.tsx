
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LockKeyholeIcon, Shield, Key, Lock, UserCheck, Share2, Database, ShieldCheckIcon, KeySquare, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SinglePage = () => {
  const [activeSection, setActiveSection] = useState("verify");
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'complete' | 'failed'>('idle');

  const handleStartVerification = () => {
    setVerificationStatus('verifying');
    setVerificationProgress(0);
    
    const interval = setInterval(() => {
      setVerificationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setVerificationStatus('complete');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-navy-700 bg-navy-900/95 backdrop-blur-sm w-full z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-400 flex items-center justify-center">
              <LockKeyholeIcon size={18} className="text-navy-900" />
            </div>
            <span className="text-xl font-bold text-white">TrustVault<span className="text-cyan-500">ID</span></span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10">
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blockchain Identity Verification
              </span>
            </h1>
            <p className="text-white/70">
              Experience our next-generation identity verification system powered by immutable blockchain technology.
              This demo illustrates how users can securely verify their identity while maintaining complete control of their data.
            </p>
          </div>

          {/* Demo Tabs */}
          <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto relative">
            <div className="absolute top-0 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
            <div className="absolute bottom-0 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] z-0"></div>
            
            <Tabs defaultValue="verify" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="verify" onClick={() => setActiveSection("verify")}>Verify Identity</TabsTrigger>
                <TabsTrigger value="manage" onClick={() => setActiveSection("manage")}>Manage Credentials</TabsTrigger>
                <TabsTrigger value="about" onClick={() => setActiveSection("about")}>How It Works</TabsTrigger>
              </TabsList>
              
              <TabsContent value="verify" className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 space-y-6">
                    <h3 className="text-xl font-semibold">Identity Verification</h3>
                    <p className="text-white/70">
                      Securely verify your identity without exposing sensitive information. 
                      Your data remains encrypted and under your control.
                    </p>
                    
                    {verificationStatus === 'idle' && (
                      <Button 
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium px-8 py-6 text-lg w-full"
                        onClick={handleStartVerification}
                      >
                        Start Verification
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                    
                    {verificationStatus === 'verifying' && (
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Processing verification...</span>
                          <span>{verificationProgress}%</span>
                        </div>
                        <Progress value={verificationProgress} className="h-2 w-full bg-navy-700" />
                        <p className="text-xs text-white/60">Verifying identity data on blockchain network...</p>
                      </div>
                    )}
                    
                    {verificationStatus === 'complete' && (
                      <div className="bg-navy-800/60 backdrop-blur-sm border border-navy-600/50 p-4 rounded-lg">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <ShieldCheckIcon size={16} className="text-green-400" />
                          </div>
                          <span className="font-medium text-green-400">Verification Successful</span>
                        </div>
                        <p className="text-white/70 text-sm mb-4">Your identity has been verified and securely stored on the blockchain.</p>
                        <Button 
                          variant="outline" 
                          className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 w-full"
                          onClick={() => setVerificationStatus('idle')}
                        >
                          Verify Again
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-br from-navy-800 to-navy-700 p-6 rounded-xl border border-navy-600 glowing-border">
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
                              Digital Identity {verificationStatus === 'complete' ? <span className="text-green-400">✓ Verified</span> : <span className="text-white/50">Pending</span>}
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
              </TabsContent>
              
              <TabsContent value="manage" className="space-y-8">
                <h3 className="text-xl font-semibold">Manage Your Digital Credentials</h3>
                <p className="text-white/70">
                  Control what information is shared and with whom. Your identity credentials are secure, 
                  cryptographically verified, and completely under your control.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-navy-800/60 backdrop-blur-sm border border-navy-600/50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <UserCheck className="text-cyan-500 h-5 w-5" />
                        <span>Personal Identity</span>
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-white/60 text-sm mb-3">Basic identity verification shared with approved services</p>
                    <Button variant="outline" size="sm" className="w-full border-navy-600 hover:bg-navy-700">Manage</Button>
                  </div>
                  
                  <div className="bg-navy-800/60 backdrop-blur-sm border border-navy-600/50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <Key className="text-purple-400 h-5 w-5" />
                        <span>Financial Credentials</span>
                      </div>
                      <span className="text-xs bg-navy-700 text-white/60 px-2 py-1 rounded">Inactive</span>
                    </div>
                    <p className="text-white/60 text-sm mb-3">Securely verify financial information without exposing data</p>
                    <Button variant="outline" size="sm" className="w-full border-navy-600 hover:bg-navy-700">Activate</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="about" className="space-y-8">
                <h3 className="text-xl font-semibold">How Blockchain Identity Works</h3>
                <p className="text-white/70">
                  Our technology utilizes decentralized blockchain to create tamper-proof digital identities
                  that are cryptographically secure and private
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Shield className="h-8 w-8 text-cyan-500" />,
                      title: "Immutable Records",
                      description: "Identity credentials stored on blockchain cannot be altered or tampered with."
                    },
                    {
                      icon: <Lock className="h-8 w-8 text-purple-400" />,
                      title: "Zero-Knowledge Proofs",
                      description: "Verify credentials without revealing the underlying data."
                    },
                    {
                      icon: <Database className="h-8 w-8 text-cyan-500" />,
                      title: "Decentralized Storage",
                      description: "Your identity isn't controlled by any single entity or database."
                    }
                  ].map((feature, i) => (
                    <div key={i} className="bg-navy-800/60 backdrop-blur-sm border border-navy-600/50 p-4 rounded-lg">
                      <div className="mb-3">{feature.icon}</div>
                      <h4 className="font-medium mb-2">{feature.title}</h4>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
          © 2025 TrustVaultID by DarkWave - Aritra Kundu
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePage;
