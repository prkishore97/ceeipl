"use client"

import { motion } from "framer-motion"
import { clientLogos } from "../data/shared-data"

export default function ClientLogosCarousel() {
  // Calculate how many logos to show in each row
  const totalLogos = clientLogos.length
  const logosPerRow = Math.ceil(totalLogos / 3)

  // Create three groups of logos
  const firstRowLogos = clientLogos.slice(0, logosPerRow)
  const secondRowLogos = clientLogos.slice(logosPerRow, logosPerRow * 2)
  const thirdRowLogos = clientLogos.slice(logosPerRow * 2)

  return (
    <div className="relative w-screen overflow-hidden">
      {/* First row - moving left */}
      <motion.div
        className="flex mb-4"
        animate={{
          x: [0, -100 * firstRowLogos.length],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] px-2">
            <div className="bg-white border border-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:border-blue-200 transition-colors duration-300">
              <img
                src={logo || "/placeholder.svg"}
                alt={`Client ${(index % firstRowLogos.length) + 1} logo`}
                width={100}
                height={100}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second row - moving right */}
      <motion.div
        className="flex mb-4"
        animate={{
          x: [-100 * secondRowLogos.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] px-2">
            <div className="bg-white border border-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:border-blue-200 transition-colors duration-300">
              <img
                src={logo || "/placeholder.svg"}
                alt={`Client ${(index % secondRowLogos.length) + logosPerRow + 1} logo`}
                width={100}
                height={100}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Third row - moving left (alternate direction) */}
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * thirdRowLogos.length],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...thirdRowLogos, ...thirdRowLogos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] px-2">
            <div className="bg-white border border-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center hover:border-blue-200 transition-colors duration-300">
              <img
                src={logo || "/placeholder.svg"}
                alt={`Client ${(index % thirdRowLogos.length) + (logosPerRow * 2) + 1} logo`}
                width={100}
                height={100}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
