import {z} from "zod";


export const verifySchema = z.object({
  code: z.string().min(6, {message:"Verfication Code should contain atleast 6 characters"})
})