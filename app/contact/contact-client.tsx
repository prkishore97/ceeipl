"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import ContactGraphic from "../components/ContactGraphic"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="bg-blue-50 min-h-screen pb-12">
      <div className="bg-blue-900 text-white py-20 mt-16 mb-12 relative overflow-hidden">
        <ContactGraphic className="absolute inset-0 text-blue-800 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-200 mx-auto text-center leading-relaxed">
            Get in touch with us for any inquiries or to discuss your project needs.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-blue-100 shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Get in Touch</h3>
                {isSubmitted ? (
                  <div className="text-green-600 text-lg">Thank you for your message. We'll get back to you soon!</div>
                ) : (
                  <form
                    action="https://formspree.io/f/movjwnpp"
                    method="POST"
                    className="space-y-4"
                    acceptCharset="UTF-8"
                    encType="multipart/form-data"
                  >
                    <input type="hidden" name="_subject" value="New contact from CEEIPL website" />
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-700">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue-700">
                        Phone number:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-700">
                        Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black resize-none"
                        rows={4}
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      name="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Send
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
            <div className="md:w-1/2 text-center">
              <h3 className="text-3xl font-semibold mb-6 text-blue-900">Our Office</h3>
              <p className="mb-2 text-black text-lg">No.1006, 1st Main, 4th Block,</p>
              <p className="mb-2 text-black text-lg">Dr. Rajkumar Road, Rajajinagar</p>
              <p className="mb-2 text-black text-lg">Bangalore, Karnataka,</p>
              <p className="mb-6 text-black text-lg">India – 560010.</p>
              <h3 className="text-3xl font-semibold mb-6 text-blue-900">Reach Us</h3>
              <p className="mb-2 text-black text-lg">Phone: 080-23387431</p>
              <p className="mb-2 text-black text-lg">Mobile: 9916473624, 9945840517</p>
              <p className="text-black text-lg">info@chaithanyaenterprises.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
