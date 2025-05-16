import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl md:text-3xl font-playfair font-bold">
              <span className="text-charcoal">Spa, Body</span> <span className="text-sage">&</span> <span className="text-brown">Office Hub</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-charcoal focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/booking" label="Booking" />
            <NavLink href="/gallery" label="Gallery" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
            <Button asChild className="bg-brown text-white hover:bg-opacity-90">
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-3 space-y-3">
          <NavLink href="/" label="Home" mobile />
          <NavLink href="/services" label="Services" mobile />
          <NavLink href="/booking" label="Booking" mobile />
          <NavLink href="/gallery" label="Gallery" mobile />
          <NavLink href="/about" label="About" mobile />
          <NavLink href="/contact" label="Contact" mobile />
          <Button asChild className="bg-brown text-white hover:bg-opacity-90 w-full mt-3">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
}

const NavLink = ({ href, label, mobile = false }: NavLinkProps) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <Link href={href}>
      <a className={`${mobile ? 'block py-2' : ''} ${isActive ? 'text-brown font-medium' : 'text-charcoal hover:text-brown'} transition-colors duration-200`}>
        {label}
      </a>
    </Link>
  );
};

export default Header;
