
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "99.9%",
    label: "Verification Accuracy",
    change: "+2.4%",
    positive: true
  },
  {
    value: "4.2M+",
    label: "Verified Identities",
    change: "+12.7%",
    positive: true
  },
  {
    value: "<0.001%",
    label: "Fraud Attempts",
    change: "-8.3%",
    positive: true
  },
  {
    value: "3.5s",
    label: "Avg. Verification Time",
    change: "-0.7s",
    positive: true
  }
];

const StatSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-800 opacity-60 z-0"></div>
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-lg rounded-lg p-6 border border-navy-600/50">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-white/60 mb-3">{stat.label}</p>
              <div className="flex items-center">
                <span className={`text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'} flex items-center`}>
                  {stat.change} <ArrowUpRight className="h-3 w-3 ml-1" />
                </span>
                <span className="text-xs text-white/40 ml-2">vs. last quarter</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
