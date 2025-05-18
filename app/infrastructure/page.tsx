import type { Metadata } from "next"
import InfrastructurePage from "./infrastructure-client"

export const metadata: Metadata = {
  title: "Our Infrastructure | CEEIPL",
  description:
    "Explore CEEIPL's state-of-the-art facilities and infrastructure that power our electrical contracting services.",
}

export default function Infrastructure() {
  return <InfrastructurePage />
}
