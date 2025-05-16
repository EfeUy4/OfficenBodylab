import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data";
import { Bath, Scissors, Laptop } from "lucide-react";

const Home = () => {
  // Fetch featured services
  const { data: services = [] } = useQuery({
    queryKey: ["/api/services"],
  });
  
  const featuredServices = services.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://pixabay.com/get/g59358bea729019c22f8e9a6eaff3b5db9bdf47a69f36fa06af77b0b734577aaee8e17fe30dae629f1bad67454fcfbdd50bb89021e984491599ac3085eb917404_1280.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 hero-gradient z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
              Your Wellness & <br />
              Workspace Sanctuary
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Experience the perfect blend of relaxation and productivity{" "}
              <br className="hidden md:block" />
              in one exquisite location
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                className="bg-brown text-white px-8 py-6 text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white text-charcoal border-0 px-8 py-6 text-lg rounded-lg hover:bg-beige transition-all duration-300 shadow-md"
              >
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Wellness & Workspace Redefined
            </h2>
            <p className="text-lg text-charcoal/80">
              Bath, Body & Office Hub offers an unparalleled blend of relaxation,
              aesthetic services, and productivity spaces, designed to nurture both
              your body and career in one harmonious location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Bath className="text-white text-2xl" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Premium Bath
              </h3>
              <p className="text-charcoal/70">
                Indulge in rejuvenating treatments designed to restore balance and
                vitality to your body and mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Scissors className="text-white text-2xl" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Expert Barbing
              </h3>
              <p className="text-charcoal/70">
                Experience precision cuts and grooming services from our skilled
                barbers in a relaxing atmosphere.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Laptop className="text-white text-2xl" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Inspiring Workspace
              </h3>
              <p className="text-charcoal/70">
                Focus and collaborate in our thoughtfully designed coworking spaces
                and private offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-charcoal/70">
              Experience the finest selection of our comprehensive wellness and
              workspace offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.length > 0 ? (
              featuredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  duration={service.duration}
                  imageUrl={service.imageUrl}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-lg text-charcoal/70">
                  Loading our premium services...
                </p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-brown text-brown hover:bg-brown hover:text-white transition-all duration-300"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-charcoal/70">
              Hear what our clients have to say about their experiences
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brown text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Experience The Best?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Book your spa treatment, barbing service, or workspace today and step
            into a world where wellness meets productivity.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brown hover:bg-beige hover:text-brown transition-all duration-300 shadow-md text-lg px-8 py-6"
          >
            <Link href="/booking">Book Your Experience</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
