"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProjectsGraphic from "../components/ProjectsGraphic"
import ScrollAnimation from "../components/ScrollAnimation"
import ClientLogosCarousel from "../components/ClientLogosCarousel"

const keyFeatures = [
  {
    title: "Comprehensive Service Offering",
    description:
      "From electrical design and engineering to installation, maintenance, and upgrades, we offer a full range of services to meet all your electrical contracting needs.",
    items: [
      "Tailored electrical system designs",
      "Full-scale installation services",
      "Ongoing maintenance and emergency repairs",
      "System upgrades and renovations",
    ],
  },
  {
    title: "Turnkey Solutions",
    description:
      "We provide end-to-end services that cover all aspects of electrical contracting, ensuring seamless integration and operational efficiency.",
    items: [
      "Initial consultation and design",
      "Installation and commissioning",
      "Post-project support",
      "Integration with mechanical and HVAC systems",
    ],
  },
  {
    title: "Experienced & Skilled Workforce",
    description: "Our team of licensed professionals brings extensive experience and expertise to every project.",
    items: [
      "Highly skilled electricians and engineers",
      "Experienced project managers",
      "Continuous training and upskilling",
      "Expertise in small and large-scale projects",
    ],
  },
  {
    title: "Certified & Licensed Contractor",
    description: "We hold multiple certifications that demonstrate our commitment to quality and compliance.",
    items: [
      "ISO 9001:2015 certified",
      "Super Grade Government-licensed contractor",
      "MSME registered company",
      "Adherence to industry regulations",
    ],
  },
  {
    title: "Safety-First Approach",
    description: "Safety is our top priority in every project we undertake.",
    items: [
      "Strict adherence to safety standards",
      "Ongoing safety training for workers",
      "Implementation of robust safety measures",
      "Commitment to employee and client well-being",
    ],
  },
  {
    title: "Timely Project Completion",
    description: "We pride ourselves on delivering projects on time and within budget.",
    items: [
      "Proven track record of meeting deadlines",
      "Efficient project management",
      "Streamlined processes to reduce delays",
      "Commitment to quality without compromise",
    ],
  },
]

const projectImages = [
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/10.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/1.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/8.png",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/11.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/14.jpg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/14.jpg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/4.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/15.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/9.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/2.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/12.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/5.jpg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/7.JPG",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/6.JPG",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/3.JPG",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PROJECT%20PHOTOS/13.jpeg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PHOTO-2025-02-28-15-49-11.jpg",
  },
  {
    src: "https://ik.imagekit.io/bcuxcmytn/PHOTO-2025-02-28-15-49-10.jpg",
  },
]

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="bg-blue-50 min-h-screen pb-12">
      <ScrollAnimation>
        <div className="bg-blue-900 text-white py-20 mt-16 mb-12 relative overflow-hidden">
          <ProjectsGraphic className="absolute inset-0 text-blue-800 opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Projects</h1>
            <p className="text-xl md:text-2xl text-blue-200 mx-auto text-center leading-relaxed">
              Delivering innovative electrical solutions across diverse sectors, from industrial complexes to smart
              cities.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        {/* Trusted by Industry Leaders */}
        <h2 className="text-2xl font-semibold text-center mt-24 mb-12 text-gray-700">Trusted by Industry Leaders</h2>
        <ClientLogosCarousel />
      </ScrollAnimation>

      {/* Project Image Carousel */}
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Project Highlights</h2>
          <Slider {...sliderSettings}>
            {projectImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-gray-600">{image.alt}</p>
              </div>
            ))}
          </Slider>
        </div>
      </ScrollAnimation>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {keyFeatures.map((feature, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-lg overflow-hidden flex flex-col h-full p-6 border border-blue-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl mr-4">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-semibold text-blue-800">{feature.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="list-none space-y-2 text-gray-700 flex-grow">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <ScrollAnimation>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Supercharge Your Infrastructure?</h2>
          <p className="text-xl text-gray-700 mb-8">Let's discuss how our expertise can benefit your project.</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </ScrollAnimation>
    </div>
  )
}
