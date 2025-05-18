"use server"

import { redirect } from "next/navigation"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically use a service like SendGrid or Nodemailer to send the email
  // For demonstration, we'll just log the data
  console.log(`Sending email to prkishore97@yahoo.com:
    From: ${name} (${email})
    Message: ${message}`)

  // In a real application, you'd send the email here
  // await sendEmailFunction(to, subject, body)

  redirect("/thank-you")
}
