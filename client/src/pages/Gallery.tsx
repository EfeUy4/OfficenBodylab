import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeFilter);
  
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Experience Our Space</h1>
            <p className="text-lg text-charcoal/70">
              Take a visual tour of our elegant facilities and serene environment
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveFilter}>
            <div className="flex justify-center">
              <TabsList className="bg-beige/50">
                <TabsTrigger value="all" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  All Images
                </TabsTrigger>
                <TabsTrigger value="spa" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  Spa & Wellness
                </TabsTrigger>
                <TabsTrigger value="barbing" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  Barbing
                </TabsTrigger>
                <TabsTrigger value="workspace" className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white">
                  Workspace
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <GalleryGrid images={filteredImages} />
            </TabsContent>
            
            <TabsContent value="spa" className="mt-8">
              <GalleryGrid images={filteredImages} />
            </TabsContent>
            
            <TabsContent value="barbing" className="mt-8">
              <GalleryGrid images={filteredImages} />
            </TabsContent>
            
            <TabsContent value="workspace" className="mt-8">
              <GalleryGrid images={filteredImages} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Virtual Tour Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Facility</h2>
            <p className="text-lg text-charcoal/70">
              Our carefully designed spaces combine elegance, comfort, and functionality to create the perfect environment for both relaxation and productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">A Tranquil Oasis</h3>
              <p className="text-charcoal/70 mb-4">
                Our facility spans 10,000 square feet of thoughtfully designed space that seamlessly integrates wellness and work areas. The architecture incorporates natural elements, abundant natural light, and a soothing color palette to create a calming atmosphere.
              </p>
              <p className="text-charcoal/70 mb-4">
                Each area has been crafted with specific intentions in mind — spa rooms that envelop you in tranquility, barber stations that combine classic and modern aesthetics, and workspaces that inspire focus and creativity.
              </p>
              <p className="text-charcoal/70">
                Throughout the space, you'll find comfortable lounges where you can unwind between services or collaborate with colleagues in a relaxed setting.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://pixabay.com/get/g59358bea729019c22f8e9a6eaff3b5db9bdf47a69f36fa06af77b0b734577aaee8e17fe30dae629f1bad67454fcfbdd50bb89021e984491599ac3085eb917404_1280.jpg" 
                alt="Spa, Body & Office Hub Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
