
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              Crio<span className="text-gray-900">.do</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Career Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Enterprise</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">Login</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Career Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Enterprise</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-700 justify-start">Login</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
