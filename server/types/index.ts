export type {DataEnvelope, DataListEnvelope} from "./dataEnvelopes";

export type ProductReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  tags: string[];
  brand?: string;
  reviews: ProductReview[];
  images: string[];
  thumbnail: string;
};


export type UserAddress = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
};

export type UserRole = "admin" | "moderator" | "user";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  address: UserAddress;
  role: UserRole;
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
