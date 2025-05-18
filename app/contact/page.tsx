import type { Metadata } from "next"
import ContactPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | CEEIPL",
  description: "Get in touch with CEEIPL for your electrical contracting needs.",
}

export default function Contact() {
  return <ContactPage />
}
