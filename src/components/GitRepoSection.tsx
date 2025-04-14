
import { Button } from "@/components/ui/button";
import { Github, Code, Lock, FileText, History } from "lucide-react";

const GitRepoSection = () => {
  const features = [
    {
      title: "Self-Hostable Backend",
      description: "Deploy our solution on your own infrastructure.",
      icon: Code
    },
    {
      title: "Privacy First",
      description: "Your data stays yours, with full control.",
      icon: Lock
    },
    {
      title: "Community Watchlists",
      description: "Access to curated threat intelligence.",
      icon: FileText
    },
    {
      title: "Full Audit Logs",
      description: "Complete transparency in all operations.",
      icon: History
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-security-900 to-security-700 text-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Open-Source First. Privacy Always.</h2>
            <p className="mt-4 text-lg text-security-100 max-w-xl mx-auto lg:mx-0">
              We believe in transparency and community ownership. Our core technology is open-source, 
              giving you complete control and visibility into how the system works.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-security-800">
                <Github className="mr-2 h-5 w-5" />
                Visit GitHub Repository
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="h-10 w-10 mb-4 text-security-200" />
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-security-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitRepoSection;
