"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/utils/validateFunction";
import { getErrorMessage } from "@/utils/getErrorMessage";

import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };

  console.log("Runnig on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mre.ylmaz@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
