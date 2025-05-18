"use client"

import { useState } from "react"
import ScrollAnimation from "../components/ScrollAnimation"
import { motion } from "framer-motion"

const infrastructureItems = [
  {
    title: "State-of-the-Art Facilities",
    description:
      "At CEEIPL, we take pride in our state-of-the-art infrastructure that supports our ability to handle a wide range of complex Electro Mechanical contracting projects. Our company is equipped with the necessary resources and facilities to ensure the smooth execution of every project, from design and planning to implementation and maintenance.",
    image: "https://i.imghippo.com/files/Rmjy2788jA.jpg",
    details: [
      "Modern offices with cutting-edge technology",
      "Fully equipped project sites",
      "Advanced design and engineering software",
      "State-of-the-art testing and quality control equipment",
    ],
  },
  {
    title: "Our Management and Team",
    description:
      "The backbone of our company is our highly qualified and professionally competent management team, each of whom has extensive experience in the electrical industry. Every member of our management team is fluent in their respective fields, ensuring that each project is managed with precision and expertise.",
    image: "https://i.postimg.cc/L8Tn1fKQ/pexels-kateryna-babaieva-2760241.jpg",
    details: [
      "Experienced and qualified management team",
      "Skilled workforce trained in the latest technologies",
      "Dedicated departments for engineering, design, and project management",
      "Continuous training and development programs",
    ],
  },
  {
    title: "Project Execution Facilities",
    description:
      "Our infrastructure includes modern offices equipped with cutting-edge technology, ensuring effective project management, communication, and coordination. Our office infrastructure is designed to streamline workflows and enhance productivity, with dedicated departments for engineering, design, project management, and client services.",
    image: "https://i.postimg.cc/QdnBVgzM/pexels-thisisengineering-3862632.jpg",
    details: [
      "Advanced project management software",
      "Efficient communication systems",
      "On-site equipment and tools for seamless implementation",
      "Mobile project management capabilities",
    ],
  },
  {
    title: "Our Commitment",
    description:
      "Our commitment is to meet the contemporary needs of the industry by providing solutions that are cost-effective, innovative, and designed to meet the highest standards of safety and reliability. Every project is carefully planned and executed, ensuring that it meets or exceeds the client's expectations.",
    image: "https://i.postimg.cc/QdnBVgzM/pexels-thisisengineering-3862632.jpg",
    details: [
      "Adherence to industry standards and best practices",
      "Focus on innovation and sustainability",
      "Commitment to safety and quality",
      "Customer-centric approach",
    ],
  },
]

export default function InfrastructurePage() {
  const [expandedItem, setExpandedItem] = useState<number | undefined>(undefined)

  return (
    <div className="bg-blue-50 min-h-screen pb-12">
      <div className="bg-blue-900 text-white py-20 mt-16 mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Infrastructure</h1>
          <p className="text-xl md:text-2xl text-blue-200 mx-auto text-center leading-relaxed">
            Equipped with cutting-edge technology and modern facilities to deliver excellence in electrical contracting
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {infrastructureItems.map((item, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="p-8"
                  initial={{ height: "auto", overflow: "visible" }}
                  animate={{
                    height: expandedItem === undefined || expandedItem === index ? "auto" : "100px",
                    overflow: expandedItem === undefined || expandedItem === index ? "visible" : "hidden",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => setExpandedItem(expandedItem === index ? undefined : index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-blue-900">{item.title}</h2>
                    <motion.div
                      animate={{
                        rotate: expandedItem === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: expandedItem === undefined || expandedItem === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: expandedItem === index ? 0.2 : 0 }}
                  >
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          className="flex items-center text-gray-700"
                          initial={{ x: 0, opacity: 1 }}
                          animate={{
                            x: expandedItem === undefined || expandedItem === index ? 0 : -20,
                            opacity: expandedItem === undefined || expandedItem === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 * detailIndex }}
                        >
                          <span className="mr-2 text-blue-500">•</span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Supercharge Your Infrastructure?</h2>
            <p className="text-xl text-gray-700 mb-8">Let's discuss how our expertise can benefit your project.</p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
