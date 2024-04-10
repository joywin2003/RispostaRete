import { z } from "zod";

export const usernameScheme = z
  .string()
  .min(3, "Usernamr should contain atleast 3 characters")
  .max(20,"Usernamr can contain atmost 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,"Username should not contain special characters"
  )

export const signUpSchema = z.object({
  username: usernameScheme,
  email: z.string().email({message:"Invalid email address"}),
  password: z
    .string()
    .min(6, {message:"Password should contain atleast 6 characters"})
})