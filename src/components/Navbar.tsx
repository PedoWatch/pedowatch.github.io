
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-security-600" />
            <span className="text-xl font-bold text-security-800">PedoWatch</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-security-600">
            Home
          </Link>
          <Link to="/integrations" className="text-sm font-medium text-gray-700 hover:text-security-600">
            Integrations
          </Link>
          <Link to="/features" className="text-sm font-medium text-gray-700 hover:text-security-600">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-security-600">
            Pricing
          </Link>
          <Link to="/github" className="text-sm font-medium text-gray-700 hover:text-security-600">
            GitHub
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Login
          </Button>
          <Button className="bg-security-600 hover:bg-security-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
