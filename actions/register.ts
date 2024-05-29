"use server";

import { db } from "@/lib/db"; 
import bcrypt from "bcryptjs"
import { RegisterSchema } from "@/Schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exitingUser = await getUserByEmail(email)
  if (exitingUser) {
    return {error: "Email already in use"}
  }

  await db.user.create({
    data: {
        name,
        email,
        password: hashedPassword,
    }
  })

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token,
  );
  

  return { success: "Confirmation email send!" };
};
