import { z } from "zod";
import {
  cartItemSchema,
  insertCartSchema,
  insertProuctSchema,
  shippingAddressSchema,
} from "@/lib/validators";

export type Product = z.infer<typeof insertProuctSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
