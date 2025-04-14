
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-security-500" />
              <span className="text-xl font-bold">PedoWatch</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Protecting online communities through advanced threat detection and collaborative reporting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Documentation</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">API</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} PedoWatch. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
