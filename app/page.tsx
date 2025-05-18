import type { Metadata } from "next"
import HomePage from "./home-client"

export const metadata: Metadata = {
  title: "CEEIPL - Super Grade Licensed Electrical Contractors & Engineers",
  description:
    "CEEIPL is a leading provider of electrical contracting services, specializing in industrial, commercial, and infrastructure projects.",
}

export default function Home() {
  return <HomePage />
}
