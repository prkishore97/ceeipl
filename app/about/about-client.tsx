"use client"

import AboutGraphic from "../components/AboutGraphic"
import ScrollAnimation from "../components/ScrollAnimation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-blue-50 min-h-screen pb-12">
      <div className="bg-blue-900 text-white py-20 mt-16 mb-12 relative overflow-hidden">
        <AboutGraphic className="absolute inset-0 text-blue-800 opacity-10" />
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About CEEIPL</h1>
            <p className="text-xl md:text-2xl text-blue-200 mx-auto text-center leading-relaxed">
              Delivering innovative, sustainable, and reliable electrical contracting solutions for over two decades.
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="bg-white shadow-lg rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">CHAITHANYA ENTERPRISES & ENGINEERS (I) PVT LTD</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center items-center mb-8 md:mb-0">
                <Image
                  src="https://ik.imagekit.io/bcuxcmytn/logo.png?updatedAt=1740556557537"
                  alt="CEEIPL Logo"
                  width={300}
                  height={200}
                  quality={100}
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 mb-4">
                  CEEIPL is a trusted electro-mechanical contracting company with over two decades of experience in
                  delivering high-quality Electromehanical solutions. As a Super Grad Govt Licensed Contractor and ISO
                  9001:2015 certified company, we are committed to excellence and providing innovative, efficient, and
                  cost-effective services for a wide range of infrastructure projects.
                </p>
                <p className="text-gray-700">
                  With two decades of hands-on experience, our services span across electrical and mechanical
                  installations, maintenance and turnkey solutions, ensuring that every aspect of your project is
                  handled with precision and professionalism.
                </p>
                <p className="text-gray-700 mt-4">
                  We prioritize safety, sustainability, and customer satisfaction in all our projects, providing 24/7
                  support and warranties for added peace of mind.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="space-y-8 mb-16">
            <motion.div
              className="bg-white shadow-lg rounded-lg p-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Vision</h2>
              <p className="text-gray-700 mb-4">
                Undeterred commitment towards providing value-added services to clients across industries and foster
                holistic work ecosystem within organisations.
              </p>
              <p className="text-gray-700 mb-4">
                CEEIPL is to be a leading provider of innovative, sustainable, and reliable electrical contracting
                solutions globally. We aim to set the standard for excellence in the electro-mechanical industry,
                delivering high-quality services that exceed client expectations, foster long-term relationships, and
                contribute to the advancement of modern infrastructure.
              </p>
              <p className="text-gray-700">
                We aspire to be recognized for our commitment to safety, cutting-edge technology, and dedication to
                customer satisfaction, making us the preferred partner for electrical installation, low-voltage systems,
                and fire safety solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Mission</h2>
              <p className="text-gray-700 mb-4">
                Spearhead the technological revolution within the electromechanical services industry by ideating and
                implementing innovative solutions.
              </p>
              <p className="text-gray-700">
                Our mission is to provide comprehensive Electro Mechanical contracting services that encompass the
                design, installation, and maintenance of electrical systems, fire protection systems, and low-voltage
                solutions. We aim to deliver high-quality, cost-effective, and innovative solutions tailored to meet the
                unique needs of every client, whether in industrial, commercial, hospitality, or healthcare sectors. Our
                mission is underpinned by a passion for excellence, a focus on continuous improvement, and a
                determination to be the trusted partner for Electro Mechanical contracting services worldwide.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Commitments</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ensuring quality in every project by adhering to the highest industry standards.</li>
                <li>Using advanced technology to improve efficiency, sustainability, and reliability.</li>
                <li>Fostering a culture of safety to protect our workforce, clients, and communities.</li>
                <li>
                  Providing exceptional customer service through transparent communication, timely execution, and
                  value-driven solutions.
                </li>
                <li>
                  Developing long-term relationships with clients by delivering consistent, reliable, and
                  high-performance results.
                </li>
              </ul>
            </motion.div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
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
        </ScrollAnimation>
      </div>
    </div>
  )
}
