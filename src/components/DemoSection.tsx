
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, Scan, CheckCircle2, AlertCircle, UploadCloud, UserCheck } from "lucide-react";

const DemoSection = () => {
  const [verificationStep, setVerificationStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setVerificationStep(1);
      
      setTimeout(() => {
        setVerificationStep(2);
        
        setTimeout(() => {
          setVerificationStep(3);
          setIsVerified(true);
          setIsLoading(false);
        }, 1200);
      }, 1500);
    }, 1000);
  };

  const resetDemo = () => {
    setVerificationStep(0);
    setIsVerified(false);
  };

  return (
    <section className="py-24 relative" id="demo">
      <div className="absolute top-40 -right-28 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Interactive Demo
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience our blockchain identity verification process with this interactive demo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="verify" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-navy-800 border border-navy-700">
              <TabsTrigger value="verify" className="data-[state=active]:bg-navy-700 data-[state=active]:text-cyan-400">Verify Identity</TabsTrigger>
              <TabsTrigger value="issue" className="data-[state=active]:bg-navy-700 data-[state=active]:text-cyan-400">Issue Credential</TabsTrigger>
              <TabsTrigger value="manage" className="data-[state=active]:bg-navy-700 data-[state=active]:text-cyan-400">Manage Wallet</TabsTrigger>
            </TabsList>
            
            <TabsContent value="verify" className="mt-6">
              <Card className="glass-card border-navy-600 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 border-r border-navy-700">
                      <div className="space-y-6">
                        <div className={`flex items-center space-x-3 ${verificationStep >= 0 ? 'text-white' : 'text-white/50'}`}>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${verificationStep >= 0 ? 'bg-cyan-500' : 'bg-navy-700'}`}>
                            <Scan size={16} className={verificationStep >= 0 ? 'text-navy-900' : 'text-white/50'} />
                          </div>
                          <div>
                            <p className="font-medium">Request Verification</p>
                            <p className="text-xs text-white/50">Submit identity information</p>
                          </div>
                        </div>
                        
                        <div className={`flex items-center space-x-3 ${verificationStep >= 1 ? 'text-white' : 'text-white/50'}`}>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${verificationStep >= 1 ? 'bg-cyan-500' : 'bg-navy-700'}`}>
                            <Fingerprint size={16} className={verificationStep >= 1 ? 'text-navy-900' : 'text-white/50'} />
                          </div>
                          <div>
                            <p className="font-medium">Decrypt Credentials</p>
                            <p className="text-xs text-white/50">Using zero-knowledge proofs</p>
                          </div>
                        </div>
                        
                        <div className={`flex items-center space-x-3 ${verificationStep >= 2 ? 'text-white' : 'text-white/50'}`}>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${verificationStep >= 2 ? 'bg-cyan-500' : 'bg-navy-700'}`}>
                            <UploadCloud size={16} className={verificationStep >= 2 ? 'text-navy-900' : 'text-white/50'} />
                          </div>
                          <div>
                            <p className="font-medium">Verify on Blockchain</p>
                            <p className="text-xs text-white/50">Check credential validity</p>
                          </div>
                        </div>
                        
                        <div className={`flex items-center space-x-3 ${verificationStep >= 3 ? 'text-white' : 'text-white/50'}`}>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${verificationStep >= 3 ? 'bg-green-500' : 'bg-navy-700'}`}>
                            <CheckCircle2 size={16} className={verificationStep >= 3 ? 'text-navy-900' : 'text-white/50'} />
                          </div>
                          <div>
                            <p className="font-medium">Verification Complete</p>
                            <p className="text-xs text-white/50">Identity confirmed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      {isVerified ? (
                        <div className="text-center py-8">
                          <div className="mx-auto h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                            <CheckCircle2 size={40} className="text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">Verification Successful</h3>
                          <p className="text-white/70 mb-6">
                            Identity credentials have been successfully verified on the blockchain.
                          </p>
                          <div className="bg-navy-900 p-4 rounded-lg mb-6 max-w-xs mx-auto">
                            <p className="text-xs text-white/50 mb-1">Transaction Hash</p>
                            <p className="font-mono text-sm text-cyan-400">0x7f9d8c5a4b3e2d1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6</p>
                          </div>
                          <Button 
                            variant="outline" 
                            className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                            onClick={resetDemo}
                          >
                            Try Again
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div>
                            <label className="text-sm text-white/70 block mb-2">Wallet Address</label>
                            <Input 
                              disabled={isLoading}
                              className="bg-navy-900 border-navy-700 text-white" 
                              value="0x7f9d8c5a4b3e2d1f0e9d8c7b6a5f4e3d2c1b0a9" 
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm text-white/70 block mb-2">Credential Type</label>
                            <select 
                              className="w-full bg-navy-900 border border-navy-700 text-white rounded-md px-3 py-2"
                              disabled={isLoading}
                            >
                              <option value="identity">Digital Identity</option>
                              <option value="education">Educational Credential</option>
                              <option value="employment">Employment Verification</option>
                              <option value="address">Address Verification</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="text-sm text-white/70 block mb-2">Verification Method</label>
                            <div className="grid grid-cols-2 gap-4">
                              <div className={`p-4 border ${isLoading ? 'border-navy-700 bg-navy-800/50' : 'border-cyan-500 bg-navy-800'} rounded-lg cursor-pointer`}>
                                <Fingerprint className="h-6 w-6 text-cyan-500 mb-2" />
                                <p className="text-sm font-medium text-white">Zero-Knowledge Proof</p>
                              </div>
                              <div className="p-4 border border-navy-700 bg-navy-800/50 rounded-lg cursor-pointer">
                                <UserCheck className="h-6 w-6 text-white/50 mb-2" />
                                <p className="text-sm font-medium text-white/50">Full Disclosure</p>
                              </div>
                            </div>
                          </div>
                          
                          {isLoading && (
                            <div>
                              <div className="flex justify-between text-xs text-white/50 mb-1">
                                <span>Verification in progress</span>
                                <span>{Math.min(verificationStep * 33 + 1, 99)}%</span>
                              </div>
                              <Progress value={Math.min(verificationStep * 33 + 1, 99)} className="h-1 bg-navy-700" indicatorClassName="bg-cyan-500" />
                            </div>
                          )}
                          
                          <Button 
                            onClick={handleVerify} 
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium"
                          >
                            {isLoading ? "Verifying..." : "Verify Identity"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="issue" className="mt-6">
              <Card className="glass-card border-navy-600 p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Issue New Credential</h3>
                <p className="text-white/70 mb-6">
                  Create and issue a new verifiable credential that will be stored on the blockchain.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/70 block mb-2">Credential Type</label>
                    <select className="w-full bg-navy-900 border border-navy-700 text-white rounded-md px-3 py-2">
                      <option value="identity">Digital Identity</option>
                      <option value="education">Educational Credential</option>
                      <option value="employment">Employment Verification</option>
                      <option value="address">Address Verification</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-white/70 block mb-2">Recipient Address</label>
                    <Input className="bg-navy-900 border-navy-700 text-white" placeholder="0x..." />
                  </div>
                  
                  <div className="p-4 border border-navy-700 bg-navy-800/50 rounded-lg">
                    <h4 className="text-white font-medium mb-3">Credential Information</h4>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-white/50 block mb-1">Attribute Name</label>
                          <Input className="bg-navy-900 border-navy-700 text-white text-sm" placeholder="E.g., Full Name" />
                        </div>
                        <div>
                          <label className="text-xs text-white/50 block mb-1">Value</label>
                          <Input className="bg-navy-900 border-navy-700 text-white text-sm" placeholder="E.g., John Doe" />
                        </div>
                      </div>
                      <Button variant="outline" className="w-full border-navy-600 text-white/70 hover:bg-navy-700 text-sm">
                        + Add Another Attribute
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium">
                      Issue Credential
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="manage" className="mt-6">
              <Card className="glass-card border-navy-600 p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Digital Identity Wallet</h3>
                <p className="text-white/70 mb-6">
                  Manage your blockchain-verified credentials and control access to your identity.
                </p>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 border border-navy-700 bg-navy-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <UserCheck size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Digital Identity</p>
                        <p className="text-xs text-white/50">Issued: Apr 2, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded mr-2">Active</span>
                      <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-navy-700">
                        Manage
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border border-navy-700 bg-navy-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Fingerprint size={20} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Biometric Verification</p>
                        <p className="text-xs text-white/50">Issued: Mar 28, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded mr-2">Active</span>
                      <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-navy-700">
                        Manage
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border border-navy-700 bg-navy-800/50 rounded-lg opacity-60">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-navy-700 flex items-center justify-center">
                        <AlertCircle size={20} className="text-white/50" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Employment Verification</p>
                        <p className="text-xs text-white/50">Expired: Feb 15, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded mr-2">Expired</span>
                      <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-navy-700">
                        Renew
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-navy-900 font-medium">
                    Request New Credential
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
