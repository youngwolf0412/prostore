import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly 2 decimal places"
  );

//  Schema for inserting products
export const insertProuctSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "brand must be at least 3 characters"),
  description: z.string().min(3, "description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for signin users
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 chars"),
});

// Schema for SIgning Up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name mjst be taleast 3 chars"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 chars"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be atleast 6 chars"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  });

// Cart's Item Schema
// every item in cart will have these data's
export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  qty: z.number().int().nonnegative("Quantity must be a positive number"),
  image: z.string().min(1, "Image is required"),
  price: currency,
});

// Cart Schema
export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, "Session cart id is required"),
  userId: z.string().optional().nullable(),
});
