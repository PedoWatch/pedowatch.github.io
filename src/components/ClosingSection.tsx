
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex mx-auto items-center justify-center h-24 w-24 rounded-full bg-security-100 mb-8">
          <Shield className="h-12 w-12 text-security-600" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-security-800">
          Because Safety Isn't Optional
        </h2>
        
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Join the network of communities protecting their members from online predators.
          Get started today with PedoWatch's powerful threat intelligence platform.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-security-600 hover:bg-security-700 text-white">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-security-700 border-security-300">
            View Demo Dashboard
          </Button>
          <Button size="lg" variant="ghost" className="text-security-700">
            Join the Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
