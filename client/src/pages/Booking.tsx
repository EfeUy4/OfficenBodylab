import { useEffect } from "react";
import { useLocation } from "wouter";
import BookingForm from "@/components/BookingForm";
import { Calendar, Check } from "lucide-react";

const Booking = () => {
  const [location] = useLocation();
  
  // Extract serviceId from URL query parameters if present
  const getServiceIdFromUrl = () => {
    try {
      const url = new URL(window.location.href);
      return url.searchParams.get("serviceId");
    } catch (error) {
      return null;
    }
  };
  
  // If URL has changed, check for serviceId
  useEffect(() => {
    // This will re-run when location changes
  }, [location]);
  
  const serviceId = getServiceIdFromUrl();
  
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Book Your Experience</h1>
            <p className="text-lg text-charcoal/70">
              Reserve your spa treatment, barbing service, or workspace with our easy online booking system
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <BookingForm preselectedServiceId={serviceId || undefined} />
          </div>
        </div>
      </section>
      
      {/* Booking Information */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Booking Information</h2>
            <p className="text-lg text-charcoal/70">
              Important details to help you prepare for your visit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Calendar className="text-brown mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">Booking Policies</h3>
                  <ul className="space-y-3 text-charcoal/70">
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Please arrive 15 minutes before your appointment time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Cancellations must be made at least 24 hours in advance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Late arrivals may result in shortened service time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>For workspace bookings, check-in is required at the front desk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brown mr-4 mt-1"><path d="M13.4 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.4"/><path d="M2 10h20"/><path d="M18 17.5a1.5 1.5 0 1 0-3 0v.5h3v-.5Z"/><path d="M15 21h3v-2.5a1.5 1.5 0 0 0-3 0V21Z"/></svg>
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">What to Bring</h3>
                  <ul className="space-y-3 text-charcoal/70">
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>For spa services: Comfortable, loose-fitting clothing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>For barbing: Reference photos if you have a specific style in mind</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>For workspace: Your laptop and any other work materials</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-sage mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Payment method and confirmation email/number</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
