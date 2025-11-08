import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#E5E8EB] bg-[#FEFEFE] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/897d2bbc34a197ac4270c40a2597b22431c2e8d8?width=302" 
            alt="ETHRAH AI" 
            className="h-4 w-[151px]"
          />
          <div className="w-px h-[23px] bg-border hidden sm:block" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-9">
            <Link 
              to="/" 
              className="text-sm font-medium text-[#141414] leading-[21px] hover:text-[#000] transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium text-[#141414] leading-[21px] hover:text-[#000] transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/case-studies" 
              className="text-sm font-medium text-[#141414] leading-[21px] hover:text-[#000] transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-[#141414] leading-[21px] hover:text-[#000] transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          <button className="px-4 h-10 bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] rounded-lg hover:bg-[#2a2a2a] transition-colors">
            Free Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#141414]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E8EB] bg-[#FEFEFE]">
          <nav className="flex flex-col px-5 py-4 space-y-3">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#141414] leading-[21px] py-2 hover:text-[#000] transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#141414] leading-[21px] py-2 hover:text-[#000] transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#141414] leading-[21px] py-2 hover:text-[#000] transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#141414] leading-[21px] py-2 hover:text-[#000] transition-colors"
            >
              Contact
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 h-10 bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] rounded-lg hover:bg-[#2a2a2a] transition-colors w-full"
            >
              Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
