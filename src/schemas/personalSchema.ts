import { z } from "zod";

export const personalSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Field required" })
    .min(8, { message: "Must be more than 8 characters" }),
  email: z
    .string()
    .min(1, { message: "Field required" })
    .email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "Field required" })
    .regex(/^[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/, {
      message: "Invalid phone number format",
    }),
});
