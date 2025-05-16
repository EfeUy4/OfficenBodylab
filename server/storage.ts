import {
  users,
  type User,
  type InsertUser,
  services,
  type Service,
  type InsertService,
  bookings,
  type Booking,
  type InsertBooking,
  contactMessages,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services
  getAllServices(): Promise<Service[]>;
  getServicesByCategory(category: string): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Bookings
  getAllBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Contact Messages
  getAllContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private services: Map<number, Service>;
  private bookings: Map<number, Booking>;
  private contactMessages: Map<number, ContactMessage>;
  private userId = 1;
  private serviceId = 1;
  private bookingId = 1;
  private contactMessageId = 1;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.bookings = new Map();
    this.contactMessages = new Map();
    
    // Initialize with some default services
    this.initializeServices();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Services
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getServicesByCategory(category: string): Promise<Service[]> {
    return Array.from(this.services.values()).filter(
      (service) => service.category === category
    );
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  async createService(insertService: InsertService): Promise<Service> {
    const id = this.serviceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }
  
  // Bookings
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }
  
  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }
  
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.bookingId++;
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      createdAt: new Date() 
    };
    this.bookings.set(id, booking);
    return booking;
  }
  
  // Contact Messages
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  // Initialize services
  private initializeServices() {
    // Spa Services
    this.createService({
      name: "Signature Massage",
      description: "A customized massage experience incorporating various techniques to address your specific needs.",
      category: "spa",
      price: 12000, // $120.00
      duration: 60,
      imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    this.createService({
      name: "Rejuvenating Facial",
      description: "Advanced skincare treatment using premium products to restore your skin's natural glow.",
      category: "spa",
      price: 9500, // $95.00
      duration: 45,
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    this.createService({
      name: "Luxury Mani-Pedi",
      description: "Complete hand and foot treatment including exfoliation, massage, and premium polish.",
      category: "spa",
      price: 8500, // $85.00
      duration: 75,
      imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    this.createService({
      name: "Aromatherapy Treatment",
      description: "Holistic treatment using essential oils to promote physical and emotional well-being.",
      category: "spa",
      price: 11000, // $110.00
      duration: 60,
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    // Barbing Services
    this.createService({
      name: "Executive Haircut",
      description: "Precision cut tailored to your features and style, including hot towel and styling.",
      category: "barbing",
      price: 4500, // $45.00
      duration: 30,
      imageUrl: "https://pixabay.com/get/g100316d28978703393f69e21f54970e0bc535fc44d06ed8038a745fd49868a2d762c708a2048bad1871a7ea55e4fc02e5f87b15dd6a3e26d9ae6f09850fe8b41_1280.jpg"
    });
    
    this.createService({
      name: "Beard Styling",
      description: "Expert trimming and shaping of your beard with essential oils and hot towel treatment.",
      category: "barbing",
      price: 3500, // $35.00
      duration: 25,
      imageUrl: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    this.createService({
      name: "Traditional Hot Shave",
      description: "Classic straight razor shave with premium products and facial massage.",
      category: "barbing",
      price: 4000, // $40.00
      duration: 30,
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    // Workspace Services
    this.createService({
      name: "Coworking Desk",
      description: "Ergonomic workspace with high-speed internet, printing services, and complimentary beverages.",
      category: "workspace",
      price: 2500, // $25.00 per day
      duration: 480, // 8 hours
      imageUrl: "https://pixabay.com/get/g7a0f40e1b62fba4e8b288d27b51b63c15f0bdcfc7f1c70fe982d628e5614fe1f75832cf7fa0474e518d4e3be05bec16a6f75053dcaba5670a7f92364d45f9b12_1280.jpg"
    });
    
    this.createService({
      name: "Private Meeting Room",
      description: "Fully-equipped meeting space for up to 8 people with AV capabilities and catering options.",
      category: "workspace",
      price: 7500, // $75.00 per hour
      duration: 60,
      imageUrl: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    });
    
    this.createService({
      name: "Premium Lounge Access",
      description: "Exclusive access to our luxury lounge with premium refreshments and networking opportunities.",
      category: "workspace",
      price: 1500, // $15.00 per visit
      duration: 240, // 4 hours
      imageUrl: "https://pixabay.com/get/ga6a5d9e4f72b9d2832d9df426da8920710cf583dfcaeec3978bf2f356a1d50688179359420e6fef9e393266bddb35ae5db0a8fc6bd09e64b83b384231648a5ef_1280.jpg"
    });
  }
}

export const storage = new MemStorage();
