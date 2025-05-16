import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ServiceCard";
import { Bath, Scissors, Laptop } from "lucide-react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Fetch all services
  const { data: allServices = [], isLoading } = useQuery({
    queryKey: ["/api/services"],
  });
  
  // Filter services based on active category
  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);
  
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Premium Services</h1>
            <p className="text-lg text-charcoal/70">
              Discover our comprehensive range of services designed to enhance your wellbeing and productivity
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
            <div className="flex justify-center">
              <TabsList className="bg-beige/50">
                <TabsTrigger value="all" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  All Services
                </TabsTrigger>
                <TabsTrigger value="spa" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  <Bath className="mr-2 h-4 w-4" />
                  Bath & Wellness
                </TabsTrigger>
                <TabsTrigger value="barbing" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  <Scissors className="mr-2 h-4 w-4" />
                  Barbing
                </TabsTrigger>
                <TabsTrigger value="workspace" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  <Laptop className="mr-2 h-4 w-4" />
                  Workspace
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <ServiceGrid services={filteredServices} isLoading={isLoading} />
            </TabsContent>
            
            <TabsContent value="spa" className="mt-8">
              <ServiceGrid services={filteredServices} isLoading={isLoading} />
            </TabsContent>
            
            <TabsContent value="barbing" className="mt-8">
              <ServiceGrid services={filteredServices} isLoading={isLoading} />
            </TabsContent>
            
            <TabsContent value="workspace" className="mt-8">
              <ServiceGrid services={filteredServices} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Why Choose Our Services</h2>
            <p className="text-lg text-charcoal/70">
              We're committed to providing exceptional experiences that prioritize your wellbeing and productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Expert Staff</h3>
              <p className="text-charcoal/70">Our highly trained professionals deliver exceptional service tailored to your needs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8c-2.8 0-5 2.2-5 5 0 2.2 2 5 5 5s5-2.8 5-5c0-2.8-2.2-5-5-5Z"/><path d="M18 4c1.2 1.2 2 2.8 2 4.5 0 3.6-4 7-8 8.5-4-1.5-8-4.9-8-8.5 0-1.7.8-3.3 2-4.5"/><path d="M12 2c1.3 0 2.6.4 3.5 1.2"/><path d="M8.5 3.2c.9-.8 2.2-1.2 3.5-1.2"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Premium Products</h3>
              <p className="text-charcoal/70">We use only the highest quality, ethically sourced products in all our services.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><line x1="12" x2="12.01" y1="6" y2="6"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Modern Technology</h3>
              <p className="text-charcoal/70">State-of-the-art equipment and amenities for optimal results and comfort.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Personalized Care</h3>
              <p className="text-charcoal/70">Each service is customized to address your unique preferences and needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ServiceGridProps {
  services: any[];
  isLoading: boolean;
}

const ServiceGrid = ({ services, isLoading }: ServiceGridProps) => {
  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-charcoal/70">Loading services...</p>
      </div>
    );
  }
  
  if (services.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-charcoal/70">No services found in this category.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          name={service.name}
          description={service.description}
          price={service.price}
          duration={service.duration}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
  );
};

export default Services;
