import { Card, CardContent } from "@/components/ui/card";
import { companyInfo, teamMembers } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">About Us</h1>
            <p className="text-lg text-charcoal/70">
              Learn more about our unique blend of wellness and workspace services
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-charcoal/80 mb-4">
                {companyInfo.description}
              </p>
              <p className="text-charcoal/80 mb-4">
                Founded in {companyInfo.founded}, we recognized a gap in the market for professionals who needed 
                both a productive workspace and access to quality wellness services without having to travel 
                between multiple locations.
              </p>
              <p className="text-charcoal/80">
                Our mission is to create a harmonious environment where our clients can attend to both their 
                professional needs and personal wellbeing, saving time while enhancing their quality of life.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <img 
                src="https://pixabay.com/get/g59358bea729019c22f8e9a6eaff3b5db9bdf47a69f36fa06af77b0b734577aaee8e17fe30dae629f1bad67454fcfbdd50bb89021e984491599ac3085eb917404_1280.jpg" 
                alt="Spa Body Office Hub Lobby" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-charcoal/70">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Holistic Wellbeing</h3>
                <p className="text-charcoal/70">
                  We believe in nurturing both mind and body, creating spaces and services that support the complete wellbeing of our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Excellence</h3>
                <p className="text-charcoal/70">
                  We are committed to delivering the highest quality in every service we provide, with attention to the finest details.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Community</h3>
                <p className="text-charcoal/70">
                  We foster meaningful connections among our clients, creating a supportive community of like-minded individuals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"></path><path d="M18 2v6h-6"></path><path d="m18 8-9 9"></path></svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Innovation</h3>
                <p className="text-charcoal/70">
                  We continuously improve our offerings, embracing new methods and technologies to enhance the client experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-charcoal/70">
              The talented professionals dedicated to making your experience exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-white shadow-md overflow-hidden border-0">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6 pb-6 px-6">
                  <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
                  <p className="text-sage mb-3">{member.role}</p>
                  <p className="text-charcoal/70 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location & Hours Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Visit Us</h2>
            <p className="text-lg text-charcoal/70">
              We're conveniently located in the heart of the city
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-md border-0 p-6">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Location & Hours</h3>
              
              <div className="space-y-6">
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
            </Card>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              {/* Google Map placeholder */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
