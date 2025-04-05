
import { 
  Shield, 
  Key, 
  Lock, 
  UserCheck, 
  Share2, 
  Database 
} from "lucide-react";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-cyan-500" />,
    title: "Immutable Records",
    description: "Identity credentials stored on blockchain cannot be altered or tampered with, ensuring maximum security and authenticity."
  },
  {
    icon: <Key className="h-10 w-10 text-purple-400" />,
    title: "Self-Sovereign Identity",
    description: "Users maintain complete ownership and control of their personal data, deciding what information to share and with whom."
  },
  {
    icon: <Lock className="h-10 w-10 text-cyan-500" />,
    title: "Zero-Knowledge Proofs",
    description: "Verify your credentials without revealing the underlying data, preserving your privacy while proving authenticity."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-purple-400" />,
    title: "Fraud Prevention",
    description: "Eliminate identity theft and fraud with cryptographically secure verification that can't be falsified or duplicated."
  },
  {
    icon: <Share2 className="h-10 w-10 text-cyan-500" />,
    title: "Selective Disclosure",
    description: "Share only the specific credentials needed for each verification, maintaining control of your personal information."
  },
  {
    icon: <Database className="h-10 w-10 text-purple-400" />,
    title: "Decentralized Storage",
    description: "Your identity isn't controlled by any single entity or database, eliminating single points of failure or control."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-40 -left-28 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 -right-28 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Built for Security and Privacy
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our blockchain identity platform combines cutting-edge cryptography with 
            decentralized infrastructure to provide the highest level of identity security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(5,215,223,0.2)] hover:translate-y-[-5px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
