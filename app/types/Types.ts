export type cabinType = {
  id: string;
  name: string;
  description?: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  price?: number;
  capacity?: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  status: string;
};

export type BookingType = {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: {
    name: string;
    image: string;
  }[];
};

export type CountryType = {
  name: string;
  flag: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  guestId?: string; // Add guestId property if it exists
  // other properties
};
