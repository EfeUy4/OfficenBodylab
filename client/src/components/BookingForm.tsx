import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Bath, Scissors, Laptop } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { bookingFormSchema } from "@shared/schema";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

// Time slots for booking
const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00"
];

// Extend the schema to include service category and serviceId
const formSchema = bookingFormSchema.extend({
  serviceCategory: z.enum(["spa", "barbing", "workspace"], {
    required_error: "Please select a service category",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface BookingFormProps {
  preselectedServiceId?: string;
}

const BookingForm = ({ preselectedServiceId }: BookingFormProps) => {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [serviceCategory, setServiceCategory] = useState<string>("spa");
  
  // Prepare the form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceCategory: "spa",
      serviceId: preselectedServiceId ? parseInt(preselectedServiceId) : undefined,
      name: "",
      email: "",
      phone: "",
      date: undefined,
      time: "",
      specialRequests: "",
    },
  });
  
  // Fetch services based on selected category
  const { data: services = [] } = useQuery({
    queryKey: ["/api/services", serviceCategory],
    queryFn: async () => {
      const response = await fetch(`/api/services?category=${serviceCategory}`);
      if (!response.ok) throw new Error("Failed to fetch services");
      return response.json();
    },
  });
  
  // Handle service category change
  useEffect(() => {
    // Reset the serviceId when category changes, unless there's a preselected service
    if (!preselectedServiceId) {
      form.setValue("serviceId", undefined);
    }
    
    setServiceCategory(form.getValues("serviceCategory"));
  }, [form.watch("serviceCategory"), form, preselectedServiceId]);
  
  // Create booking mutation
  const createBooking = useMutation({
    mutationFn: async (data: FormValues) => {
      // Format the date to ISO string for the API
      const booking = {
        ...data,
        date: data.date.toISOString(),
      };
      
      return apiRequest("POST", "/api/bookings", booking);
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed",
        description: "Your booking has been successfully scheduled.",
      });
      
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      form.reset();
      
      // Redirect to thank you message or homepage
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: FormValues) => {
    createBooking.mutate(data);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Service Category Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-playfair font-semibold mb-6">Select Service Category</h3>
          <FormField
            control={form.control}
            name="serviceCategory"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="relative">
                      <FormItem className="flex flex-col items-center space-y-3">
                        <FormControl>
                          <RadioGroupItem
                            value="spa"
                            id="spa"
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="spa"
                          className={`block w-full border-2 ${
                            field.value === "spa" ? "border-sage" : "border-beige"
                          } p-6 rounded-lg text-center cursor-pointer hover:border-sage transition-colors duration-200`}
                        >
                          <Bath className="w-6 h-6 text-sage mx-auto mb-3" />
                          <span className="block font-medium">Bath & Wellness</span>
                        </FormLabel>
                      </FormItem>
                    </div>
                    
                    <div className="relative">
                      <FormItem className="flex flex-col items-center space-y-3">
                        <FormControl>
                          <RadioGroupItem
                            value="barbing"
                            id="barbing"
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="barbing"
                          className={`block w-full border-2 ${
                            field.value === "barbing" ? "border-sage" : "border-beige"
                          } p-6 rounded-lg text-center cursor-pointer hover:border-sage transition-colors duration-200`}
                        >
                          <Scissors className="w-6 h-6 text-sage mx-auto mb-3" />
                          <span className="block font-medium">Barbing Services</span>
                        </FormLabel>
                      </FormItem>
                    </div>
                    
                    <div className="relative">
                      <FormItem className="flex flex-col items-center space-y-3">
                        <FormControl>
                          <RadioGroupItem
                            value="workspace"
                            id="workspace"
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="workspace"
                          className={`block w-full border-2 ${
                            field.value === "workspace" ? "border-sage" : "border-beige"
                          } p-6 rounded-lg text-center cursor-pointer hover:border-sage transition-colors duration-200`}
                        >
                          <Laptop className="w-6 h-6 text-sage mx-auto mb-3" />
                          <span className="block font-medium">Workspace & Lounge</span>
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* Specific Service Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-playfair font-semibold mb-4">Select Specific Service</h3>
          <FormField
            control={form.control}
            name="serviceId"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  value={field.value?.toString()}
                  disabled={services.length === 0}
                >
                  <FormControl>
                    <SelectTrigger className="w-full p-3 border border-beige rounded-lg focus:ring-2 focus:ring-sage">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id.toString()}>
                        {service.name} (${(service.price / 100).toFixed(2)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* Date & Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Select Date</h3>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal flex justify-between border-beige hover:bg-beige/20"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Select Time</h3>
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={!form.getValues("date")}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full p-3 border border-beige rounded-lg focus:ring-2 focus:ring-sage">
                        <SelectValue placeholder="Select time..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TIME_SLOTS.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time.split(":")[0] > "12" 
                            ? `${parseInt(time.split(":")[0]) - 12}:${time.split(":")[1]} PM`
                            : `${time} ${time.split(":")[0] === "12" ? "PM" : "AM"}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        {/* Personal Information */}
        <div className="mb-8">
          <h3 className="text-xl font-playfair font-semibold mb-4">Your Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      className="w-full p-3 border border-beige rounded-lg focus:ring-2 focus:ring-sage"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Your email address" 
                      className="w-full p-3 border border-beige rounded-lg focus:ring-2 focus:ring-sage"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="Your phone number" 
                      className="w-full p-3 border border-beige rounded-lg focus:ring-2 focus:ring-sage"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 font-medium">Special Requests</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any special requests or notes" 
                      className="w-full p-3 border border-beige rounded-lg focus:ring-2 focus:ring-sage"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-brown text-white py-4 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium text-lg"
          disabled={createBooking.isPending}
        >
          {createBooking.isPending ? "Processing..." : "Confirm Booking"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
