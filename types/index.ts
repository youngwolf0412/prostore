import { z } from "zod";
import { insertProuctSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProuctSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
