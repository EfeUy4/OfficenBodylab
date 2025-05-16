import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

interface ServiceCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  imageUrl: string;
  isAvailable?: boolean;
}

const ServiceCard = ({ id, name, description, price, duration, imageUrl, isAvailable = true }: ServiceCardProps) => {
  return (
    <Card className="service-card bg-white overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="h-60 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
        />
        {isAvailable ? (
          <Badge className="absolute top-3 right-3 bg-sage text-white">Available</Badge>
        ) : (
          <Badge className="absolute top-3 right-3 bg-destructive text-white">Currently Unavailable</Badge>
        )}
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h4 className="font-playfair text-xl font-semibold mb-2">{name}</h4>
        <p className="text-charcoal/70 mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-brown font-semibold">
            {formatCurrency(price)} {duration > 60 ? `/ ${Math.floor(duration / 60)} hr${duration > 120 ? 's' : ''}` : `/ ${duration} min`}
          </span>
          <Button 
            asChild 
            variant="link" 
            className="text-sage hover:text-brown transition-colors p-0"
            disabled={!isAvailable}
          >
            <Link href={`/booking?serviceId=${id}`}>Book Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
