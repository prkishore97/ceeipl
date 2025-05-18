"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CareerGraphic from "../components/CareerGraphic"
import ScrollAnimation from "../components/ScrollAnimation"

const jobListings = [
  {
    title: "Project Manager (MEPF)",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Oversees the planning, coordination, and execution of mechanical, electrical, plumbing, and fire protection systems on construction projects, ensuring timely delivery, quality standards, and budget adherence.",
    responsibilities: [
      "Design and oversee electrical systems for commercial and industrial projects",
      "Manage project teams and coordinate with clients",
      "Ensure compliance with safety standards and regulations",
      "Review and approve electrical drawings and specifications",
    ],
    requirements: [
      "B.E/B.Tech in Electrical Engineering",
      "5+ years of experience in electrical contracting",
      "Strong knowledge of electrical codes and standards",
      "Excellent project management skills",
    ],
  },
  {
    title: "Site Supervisor",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "8-12 years",
    description:
      "Responsible for overseeing the day-to-day operations on-site, ensuring that MEPF installations are carried out safely, efficiently and according to project specifications.",
    responsibilities: [
      "Supervise electrical installation work at project sites",
      "Ensure adherence to safety protocols",
      "Coordinate with project managers and workers",
      "Maintain site documentation and progress reports",
    ],
    requirements: [
      "Diploma/B.E in Electrical Engineering",
      "3+ years of site supervision experience",
      "Knowledge of electrical systems and safety standards",
      "Strong leadership abilities",
    ],
  },
  {
    title: "MEPF Engineer",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Responsible for designing, implementing, and managing the mechanical, electrical, plumbing, and fire protection systems in construction projects.",
    responsibilities: [
      "Supervise electrical installation work at project sites",
      "Ensure adherence to safety protocols",
      "Coordinate with project managers and workers",
      "Maintain site documentation and progress reports",
    ],
    requirements: [
      "Diploma/B.E in Electrical Engineering",
      "3+ years of site supervision experience",
      "Knowledge of electrical systems and safety standards",
      "Strong leadership abilities",
    ],
  },
  {
    title: "Electrical Engineer",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Responsible for designing, planning, and overseeing the installation and maintenance of electrical systems in construction projects.",
    responsibilities: [
      "Supervise electrical installation work at project sites",
      "Ensure adherence to safety protocols",
      "Coordinate with project managers and workers",
      "Maintain site documentation and progress reports",
    ],
    requirements: [
      "Diploma/B.E in Electrical Engineering",
      "3+ years of site supervision experience",
      "Knowledge of electrical systems and safety standards",
      "Strong leadership abilities",
    ],
  },
  {
    title: "Design Engineer CAD (MEPF)",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Creating detailed design drawings , As-built, Shop Drawings, and plans for mechanical, electrical, plumbing, and fire protection systems using CAD software",
    responsibilities: [
      "Supervise electrical installation work at project sites",
      "Ensure adherence to safety protocols",
      "Coordinate with project managers and workers",
      "Maintain site documentation and progress reports",
    ],
    requirements: [
      "Diploma/B.E in Electrical Engineering",
      "3+ years of site supervision experience",
      "Knowledge of electrical systems and safety standards",
      "Strong leadership abilities",
    ],
  },
  {
    title: "Electrical Foreman",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Supervises and coordinates electrical work on-site, ensuring that installations, repairs, and maintenance are carried out according to project specifications, safety standards, and timelines.",
    responsibilities: [
      "Supervise electrical installation work at project sites",
      "Ensure adherence to safety protocols",
      "Coordinate with project managers and workers",
      "Maintain site documentation and progress reports",
    ],
    requirements: [
      "Diploma/B.E in Electrical Engineering",
      "3+ years of site supervision experience",
      "Knowledge of electrical systems and safety standards",
      "Strong leadership abilities",
    ],
  },
  {
    title: "Project Coordinator",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Key Role in the planning, execution, and completion of MEPF projects by managing schedules, resources, and communication between teams. They track project progress, ensure documentation is up to date, and support project managers in ensuring timely and successful project delivery.",
    responsibilities: [
      "Supervise electrical installation work at project sites",
      "Ensure adherence to safety protocols",
      "Coordinate with project managers and workers",
      "Maintain site documentation and progress reports",
    ],
    requirements: [
      "Diploma/B.E in Electrical Engineering",
      "3+ years of site supervision experience",
      "Knowledge of electrical systems and safety standards",
      "Strong leadership abilities",
    ],
  },
]

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  return (
    <div className="bg-blue-50 min-h-screen pb-12">
      <div className="bg-blue-900 text-white py-20 mt-16 mb-12 relative overflow-hidden">
        <CareerGraphic className="absolute inset-0 text-blue-800 opacity-10" />
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-200 mx-auto text-center leading-relaxed">
              Be part of a dynamic team delivering innovative electrical solutions across India
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Join CEEIPL?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Growth Opportunities",
                  description:
                    "Continuous learning and development opportunities to advance your career in electrical engineering.",
                },
                {
                  title: "Innovative Projects",
                  description: "Work on cutting-edge electrical infrastructure projects across various industries.",
                },
                {
                  title: "Collaborative Culture",
                  description: "Join a supportive team environment that values innovation, creativity, and excellence.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Current Openings</h2>
          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                        <span>⏳ {job.experience}</span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: selectedJob === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedJob === index ? "auto" : 0,
                      opacity: selectedJob === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4">
                      <p className="text-gray-600">{job.description}</p>

                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <p className="text-gray-600">
                          To apply, please send your resume and cover letter to:{" "}
                          <a href="mailto:info@chaithanyaenterprises.com" className="text-blue-600 hover:text-blue-700">
                            info@chaithanyaenterprises.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Don't see a suitable position?</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're always looking for talented individuals. Send your resume to{" "}
              <a href="mailto:info@chaithanyaenterprises.com" className="text-blue-600 hover:text-blue-700">
                info@chaithanyaenterprises.com
              </a>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
