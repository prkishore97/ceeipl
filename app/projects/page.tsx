import type { Metadata } from "next"
import ProjectsPage from "./projects-client"

export const metadata: Metadata = {
  title: "Our Projects | CEEIPL",
  description: "Explore CEEIPL's portfolio of successful electrical contracting projects across various industries.",
}

export default function Projects() {
  return <ProjectsPage />
}
