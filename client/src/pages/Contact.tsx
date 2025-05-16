import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

const Contact = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-charcoal/70">
              We'd love to hear from you. Reach out with any questions about our services or to schedule an appointment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-charcoal/70 mb-8">
                We'd love to hear from you. Reach out with any questions about our services or to schedule an appointment.
              </p>
              
              {/* Contact Form */}
              <ContactForm />
            </div>
            
            <div>
              <Card className="bg-beige p-8 rounded-xl shadow-md border-0">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Visit Us</h3>
                
                <div className="mb-8 space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-brown mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-charcoal/70">{companyInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-brown mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-charcoal/70">{companyInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-brown mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-charcoal/70">{companyInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-brown mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <div className="text-charcoal/70">
                        <p>Monday - Friday: {companyInfo.hours.monday}</p>
                        <p>Saturday: {companyInfo.hours.saturday}</p>
                        <p>Sunday: {companyInfo.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-lg overflow-hidden h-64 bg-white shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986763304465!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1625671639947!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Connect With Us</h2>
            <p className="text-lg text-charcoal/70">
              Follow us on social media for updates, wellness tips, and special offers
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <Link href={companyInfo.socialMedia.facebook}>
              <a className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:bg-sage hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={28} />
              </a>
            </Link>
            <Link href={companyInfo.socialMedia.instagram}>
              <a className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:bg-sage hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={28} />
              </a>
            </Link>
            <Link href={companyInfo.socialMedia.twitter}>
              <a className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:bg-sage hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={28} />
              </a>
            </Link>
            <Link href={companyInfo.socialMedia.linkedin}>
              <a className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:bg-sage hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-charcoal/70">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">Do I need to make a reservation?</h3>
                <p className="text-charcoal/70">
                  Yes, we recommend making reservations for all our services to ensure availability. You can book online, by phone, or in person.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">What is your cancellation policy?</h3>
                <p className="text-charcoal/70">
                  We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">Do you offer gift certificates?</h3>
                <p className="text-charcoal/70">
                  Yes, we offer gift certificates for all our services. These can be purchased online or at our reception desk.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">What amenities are included with workspace bookings?</h3>
                <p className="text-charcoal/70">
                  All workspace bookings include high-speed internet, printing services, complimentary beverages, and access to common areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">Are there package deals available?</h3>
                <p className="text-charcoal/70">
                  Yes, we offer various package deals that combine our services for a discounted price. Contact us for more information.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">How early should I arrive for my appointment?</h3>
                <p className="text-charcoal/70">
                  We recommend arriving 15 minutes before your scheduled appointment to complete any necessary paperwork and prepare for your service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
