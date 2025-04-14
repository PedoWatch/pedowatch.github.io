
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ShieldAlert } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-security-900 to-security-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center md:text-left md:max-w-2xl lg:max-w-3xl">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-security-800/30 text-security-100 text-sm font-medium">
            <ShieldAlert className="h-4 w-4 mr-2" />
            Protecting communities online
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Community-Driven Threat Intelligence for Online Safety
          </h1>
          
          <p className="mt-6 text-xl text-security-100">
            Real-time reports, verified alerts, and integrations to safeguard your space.
            Monitor and protect your online community with our advanced threat detection system.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-security-500 hover:bg-security-600 text-white">
              Integrate with Discord
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-security-800 hover:bg-security-50">
              Deploy to Roblox
            </Button>
            <Button size="lg" variant="outline" className="text-security-100 border-security-300 hover:border-security-200">
              Explore Self-Hosting
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-10">
        <Shield className="w-96 h-96" />
      </div>
    </div>
  );
};

export default Hero;
