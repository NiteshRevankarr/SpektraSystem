
export interface Order {
    orderId: number;
    userId: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    totalAmount: number;
    shippingCharges: number;
    orderDate: Date;
  }
  
  
  