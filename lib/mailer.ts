"use server";

import { Resend } from "resend";

import { ContactFormType } from "@/components/contact/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (form: ContactFormType, description: string) => {
  const response = await resend.emails.send({
    from: "Opportunity <onboarding@resend.dev>",
    to: "achref.gallaoui.dev@gmail.com",
    subject: form.subject,
    html: description,
  });

  return response;
};
