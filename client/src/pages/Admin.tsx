import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatTime, formatCurrency } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Booking, Service, ContactMessage } from "@shared/schema";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  // Fetch bookings
  const { data: bookings = [], isLoading: isLoadingBookings } = useQuery<Booking[]>({
    queryKey: ["/api/bookings"],
  });

  // Fetch services for reference
  const { data: services = [], isLoading: isLoadingServices } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  // Fetch contact messages
  const { data: contactMessages = [], isLoading: isLoadingMessages } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
  });

  // Helper function to get service name by ID
  const getServiceNameById = (serviceId: number): string => {
    const service = services.find(service => service.id === serviceId);
    return service ? service.name : 'Unknown Service';
  };

  // Helper function to format booking date/time
  const formatBookingDateTime = (date: string, time: string): string => {
    return `${formatDate(new Date(date))} at ${formatTime(time)}`;
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Admin Dashboard</h1>
            <p className="text-lg text-charcoal/70">
              Manage bookings and view customer inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-charcoal/70">Total Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-brown">
                  {isLoadingBookings ? "Loading..." : bookings.length}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-charcoal/70">Active Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-brown">
                  {isLoadingServices ? "Loading..." : services.length}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-charcoal/70">Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-brown">
                  {isLoadingMessages ? "Loading..." : contactMessages.length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="bookings" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-beige/50">
                <TabsTrigger
                  value="bookings"
                  className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white"
                >
                  Bookings
                </TabsTrigger>
                <TabsTrigger
                  value="messages"
                  className="px-6 py-3 data-[state=active]:bg-brown data-[state=active]:text-white"
                >
                  Contact Messages
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoadingBookings || isLoadingServices ? (
                    <div className="text-center py-8">
                      <p className="text-charcoal/70">Loading bookings...</p>
                    </div>
                  ) : bookings.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-charcoal/70">No bookings found.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Special Requests</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {bookings.map((booking) => {
                            const serviceDetails = services.find(s => s.id === booking.serviceId);
                            
                            return (
                              <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.name}</TableCell>
                                <TableCell>
                                  {getServiceNameById(booking.serviceId)}
                                  {serviceDetails && (
                                    <div className="text-sm text-charcoal/60">
                                      {formatCurrency(serviceDetails.price)}
                                    </div>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {formatBookingDateTime(booking.date.toString(), booking.time)}
                                </TableCell>
                                <TableCell>
                                  <div>{booking.email}</div>
                                  <div className="text-sm text-charcoal/60">{booking.phone}</div>
                                </TableCell>
                                <TableCell>
                                  {booking.specialRequests || "None"}
                                </TableCell>
                                <TableCell>
                                  <Badge className="bg-sage text-white hover:bg-sage/80">
                                    Confirmed
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Recent Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoadingMessages ? (
                    <div className="text-center py-8">
                      <p className="text-charcoal/70">Loading messages...</p>
                    </div>
                  ) : contactMessages.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-charcoal/70">No messages found.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Date</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {contactMessages.map((message) => (
                            <TableRow key={message.id}>
                              <TableCell className="font-medium">{message.name}</TableCell>
                              <TableCell>{message.email}</TableCell>
                              <TableCell>{message.subject}</TableCell>
                              <TableCell className="max-w-xs truncate">
                                {message.message}
                              </TableCell>
                              <TableCell>
                                {formatDate(message.createdAt)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Admin;
