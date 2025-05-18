import type { Metadata } from "next"
import AboutPage from "./about-client"

export const metadata: Metadata = {
  title: "About Us | CEEIPL",
  description: "Learn about CEEIPL's journey, vision, and commitment to excellence in electrical contracting.",
}

export default function About() {
  return <AboutPage />
}
