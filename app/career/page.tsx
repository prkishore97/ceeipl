import type { Metadata } from "next"
import CareerPage from "./career-client"

export const metadata: Metadata = {
  title: "Careers | CEEIPL",
  description: "Join our team at CEEIPL and be part of innovative electrical engineering solutions.",
}

export default function Career() {
  return <CareerPage />
}
