"use client"

import Image from "next/image"
import SpecializationGraphic from "../components/SpecializationGraphic"
import ScrollAnimation from "../components/ScrollAnimation"

const specializations = [
  {
    title: "Industrial Installation Works",
    description:
      "We have extensive experience in executing electrical installation projects for various industries, including food processing, iron and steel, automobile factories, textile mills, and cement industries.",
    image: "https://ik.imagekit.io/bcuxcmytn/1911.jpg?updatedAt=1740559428967",
    items: [
      "Substation installation and maintenance",
      "Internal and external electrification using cutting-edge technology",
      "Automation solutions for improved operational efficiency",
    ],
  },
  {
    title: "Hospital Works",
    description:
      "We specialize in electrical and MEP solutions for healthcare facilities, including major operation theatres, MRI centers, and nurse call systems.",
    image: "https://i.postimg.cc/fLP33cKC/pexels-pixabay-236380.jpg",
    items: [
      "Substation design and installation for reliable power supply",
      "Internal and external lighting systems optimized for hospital environments",
      "Power distribution for critical healthcare equipment",
      "Fire protection systems to ensure the safety of patients and staff",
    ],
  },
  {
    title: "Hotels & Resorts",
    description:
      "With our extensive experience in the hospitality sector, we have successfully executed electrical works for hotels and resorts across multiple states.",
    image: "https://i.postimg.cc/6pK8NSyX/hotel.jpg",
    items: [
      "Substation installation and integration",
      "Internal and external lighting systems",
      "Power distribution, including energy-efficient solutions",
      "Voice systems, CCTV and security solutions for enhanced guest safety and comfort",
    ],
  },
  {
    title: "Commercial Building Electrification Works",
    description:
      "We specialize in electrical systems for commercial buildings, including office spaces, retail outlets, and multi-story complexes.",
    image: "https://i.postimg.cc/nzXzkfwv/image-interior.jpg",
    items: [
      "Power distribution and lighting design",
      "HVAC system integration for energy-efficient climate control",
      "Low voltage systems such as data cabling, CCTV, and security systems",
    ],
  },
  {
    title: "Design-Build Concept",
    description:
      "Our Design-Build services provide a seamless integration of electrical design and construction, ensuring efficient project delivery from concept to completion with Custom Electrical Design, System Integration, Project Management.",
    image: "https://i.postimg.cc/vmqTfZXY/consultatnt-img.jpg",
    items: [
      "Customized electrical designs tailored to specific project needs",
      "Load analysis, energy audits, and sustainable design practices to ensure cost-effective solutions",
      "System optimization for efficiency, reliability, and safety",
    ],
  },
  {
    title: "Building Automation Works",
    description:
      "We offer cutting-edge building automation solutions that integrate electrical systems for seamless control of various building functions.",
    image: "https://i.postimg.cc/1z548qG7/automation.jpg",
    items: [
      "Lighting, HVAC, and security systems integration",
      "Energy management for optimal usage and savings",
      "Remote monitoring and control of building systems for enhanced convenience and efficiency",
    ],
  },
  {
    title: "Office Space",
    description:
      "We provide comprehensive electrical solutions for office spaces, from design to installation. Our services include power distribution, lighting design, and wiring systems tailored to your office's needs. We ensure reliable and safe electrical setups, including all necessary safety systems and custom power solutions for workstations and meeting areas. Our team ensures that all work complies with local codes and industry standards, delivering a functional and efficient workspace.",
    image: "https://ik.imagekit.io/bcuxcmytn/1992.jpg?updatedAt=1740560153272",
    items: [
      "Lighting, HVAC, and security systems integration",
      "Energy management for optimal usage and savings",
      "Functional & Efficieny through industry best practices",
    ],
  },
  {
    title: "Electrical Liasoning Works",
    description:
      "We manage the liasoning process for obtaining necessary approvals and managing power requirements for various projects.",
    image: "https://ik.imagekit.io/bcuxcmytn/electricity-high-voltage-pole-sky.jpg",
    items: ["Temporary power solutions", "Permanent power supply arrangements"],
  },
]

export default function SpecializationPage() {
  return (
    <div className="bg-blue-50 min-h-screen pb-12">
      <ScrollAnimation>
        <div className="bg-blue-900 text-white py-20 mt-16 mb-12 relative overflow-hidden w-screen">
          <SpecializationGraphic className="absolute inset-0 text-blue-800 opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Specializations</h1>
            <p className="text-xl md:text-2xl text-blue-200 mx-auto text-center leading-relaxed">
              As pioneers in Electro-Mechanical Contracting Services, we offer a broad range of solutions in HT & LT
              electrical installations, fire alarm and protection systems, and low voltage systems. Our expertise lies
              in delivering cost-effective and high-quality solutions that cater to the unique requirements of various
              industries.
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <div className="w-screen">
        <div className="flex flex-col items-center">
          {specializations.map((spec, index) => (
            <ScrollAnimation key={index}>
              <div
                className={`w-screen ${
                  index % 3 === 0 ? "bg-blue-50" : index % 3 === 1 ? "bg-blue-100" : "bg-blue-200"
                } py-12`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className={`flex flex-col md:flex-row items-center mb-16 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-2/5 mb-8 md:mb-0">
                      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mx-auto">
                        <Image
                          className="object-cover w-full h-full"
                          src={spec.image || "/placeholder.svg"}
                          alt={spec.title}
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className={`w-full md:w-3/5 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <h2 className="text-3xl font-semibold text-blue-800 mb-4">{spec.title}</h2>
                      <p className="text-gray-600 mb-4">{spec.description}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {spec.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <div className="w-screen bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Supercharge Your Infrastructure?</h2>
            <p className="text-xl text-gray-700 mb-8">Let's discuss how our expertise can benefit your project.</p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
