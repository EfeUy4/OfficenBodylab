import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import { FormEvent, useState } from 'react';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would connect to a newsletter service
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter."
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Spa, Body & Office Hub</h3>
            <p className="text-white/70 mb-6">
              Your integrated wellness and workspace destination where relaxation meets productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-sage transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-sage transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-sage transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-sage transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/" label="Home" /></li>
              <li><FooterLink href="/services" label="Services" /></li>
              <li><FooterLink href="/booking" label="Book Now" /></li>
              <li><FooterLink href="/gallery" label="Gallery" /></li>
              <li><FooterLink href="/about" label="About Us" /></li>
              <li><FooterLink href="/contact" label="Contact" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/services" label="Spa Treatments" /></li>
              <li><FooterLink href="/services" label="Barbing Services" /></li>
              <li><FooterLink href="/services" label="Coworking Spaces" /></li>
              <li><FooterLink href="/services" label="Meeting Rooms" /></li>
              <li><FooterLink href="/services" label="Lounge Access" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to receive updates, special offers, and wellness tips.
            </p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-r-none text-charcoal flex-grow focus-visible:ring-sage"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-sage text-white rounded-l-none hover:bg-opacity-90">
                <span className="sr-only">Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Spa, Body & Office Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <Link href={href}>
      <a className="text-white/70 hover:text-sage transition-colors">{label}</a>
    </Link>
  );
};

export default Footer;
