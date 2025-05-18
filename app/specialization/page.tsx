import type { Metadata } from "next"
import SpecializationPage from "./specialization-client"

export const metadata: Metadata = {
  title: "Our Specializations | CEEIPL",
  description: "Explore CEEIPL's specialized electrical contracting services and solutions.",
}

export default function Specialization() {
  return <SpecializationPage />
}
