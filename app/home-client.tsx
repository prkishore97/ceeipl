"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import BackgroundGraphic from "./components/BackgroundGraphic" // Add this import
import Image from "next/image"
import ClientLogosCarousel from "./components/ClientLogosCarousel"
import ScrollAnimation from "./components/ScrollAnimation"

const projects = [
  {
    title: "Industrial Power Distribution",
    description: "",
    image: "https://i.postimg.cc/HW0S164C/pexels-brett-sayles-918986.jpg",
  },
  {
    title: "Solar Farm Installation",
    description: "",
    image:
      "https://media-hosting.imagekit.io//df37be3868354276/glo-solar-roof-SSM1-south-Nauset_16-9.webp?Expires=1833027376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aDZzjGy0X0V8CRdhhlRmmq7XqGCPyjTqGdKil9D-jXNTrJZzDD07~7nfwYM0Tn7Pz-x~dY1y8yXPsefeyCvEXsjcPOAg3atwGkisy0ZFdZg3ORnE~udABClV9XB-x6GB09y0nl1gp5A6Mlv9ITrO0r~0ghpgufcmHrL4gGNFCy4C2cHHwT63E2b6bEs-dK1ZHIUTg38G8aORaov2DkLIZUyYWiv~Mw5HbTpoUf-aPqobkBEGwcoNMfu0W18p~A1Q2GXbGy0PJyj3s46aVAUsK-poaz3c3MtjyfiMJ5C6CZKdxFHgYJ5v3ONfKasPH1iISeowajX~EBifPUR4yG~GJQ__",
  },
  {
    title: "Smart Building Automation",
    description: "",
    image: "https://i.postimg.cc/Gp7ZnqkQ/pexels-zhangkaiyv-5659432.jpg",
  },
  {
    title: "Hospital Electrical Infrastructure",
    description: "",
    image:
      "https://media-hosting.imagekit.io//5c0ddea3dbc14104/hospital-interior-design-service.jpg?Expires=1833027376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qPSyySV2~N7N5gMaScNLcyfAp8w4-F~8Z0MD-xT0~2XU79wphENpuZSxITK7-KQz9g3ctw0JN391GWXBk3TbTUTqKkefiffhs3ZM9grhPDK2ynut7fSnTWozZGDULyNJpklc0JZy~WUhI8dzDf7GbQs~DljuBte6Jaz6RvYmeBANwX9~c5jNjEZPIcvCa37JCqdLMcQSepCAsXb34CxdF3OVnMqnxuClHqzS94PoGu3hJU~RTqvzIVVcvbXscLcZzwpmeW4KqKKUhl8kOg8X3FwCsD0f5wUiS-j9noAHjZDfh-gd7e~rdvNnMI2ms1PVZrfwv9zGzA2sFLt0s4SyuA__",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Custom CSS to ensure the video fills the entire hero section
  const customCSS = `
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 800px;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #020e55;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  pointer-events: auto; /* Allow video to receive events for mobile autoplay */
}

.video-wrapper > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 !important;
  margin: 0;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}

.hero-content > div {
  pointer-events: auto;
}

/* Hide video controls */
.video-wrapper iframe::-webkit-media-controls {
  display: none !important;
}

.video-wrapper iframe::-webkit-media-controls-enclosure {
  display: none !important;
}

.video-wrapper iframe::-webkit-media-controls-panel {
  display: none !important;
}

/* Overlay to prevent interaction */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: transparent;
}

body, html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
`

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Custom CSS for hero video */}
      <style jsx global>
        {customCSS}
      </style>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="video-wrapper">
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" }}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/427239/f618ed60-8c70-41dd-bb25-fe698ff7652c?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false&playsinline=true&autopause=false&clicktoplay=false&background=true&defaultTextTrack=false&loadingSpinner=false"
              loading="lazy"
              style={{
                border: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "100vh",
                minWidth: "100vw",
                minHeight: "100vh",
                objectFit: "cover",
                objectPosition: "center center",
                transform: "translate(-50%, -50%) scale(1.1)",
                margin: 0,
                padding: 0,
                pointerEvents: "auto" /* Allow video to play on mobile */,
              }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>

        {/* Transparent overlay to prevent interaction with the video */}
        <div
          className="video-overlay"
          style={{
            pointerEvents: "none", // Allow video to play but prevent interaction
            touchAction: "none", // Prevent touch actions
          }}
        ></div>

        <div className="hero-content">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
              Your Trusted Partner in MEPF Innovation
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-lg">
              Super Grade Licensed Electrical Contractors & Engineers
            </h2>
          </div>
        </div>
      </div>

      {/* MEPF Boxes Section */}
      <div className="relative -mt-32 z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { letter: "M", full: "Mechanical", description: "HVAC Systems, Industrial Equipment, Energy Systems" },
              { letter: "E", full: "Electrical", description: "Power Distribution, Lighting, Control Systems" },
              { letter: "P", full: "Plumbing", description: "Water Supply, Drainage, Gas Systems" },
              { letter: "F", full: "Fire Protection", description: "Detection, Suppression, Emergency Systems" },
            ].map((item, index) => (
              <div key={index} className="relative h-64 [perspective:1000px] cursor-pointer">
                <div className="absolute inset-0 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center [backface-visibility:hidden]">
                    <span className="text-white text-6xl font-bold">{item.letter}</span>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-2xl font-bold text-white mb-4">{item.full}</h3>
                    <p className="text-center text-white text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Powering the Future Banner */}
      <div className="relative bg-blue-50 py-12 mt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Powering Tomorrow's Infrastructure with MEPF Excellence
            </h2>
            <p className="text-xl text-blue-700">
              At CEEIPL, we specialize in providing cutting-edge MEPF solutions that are essential for the modern
              infrastructure of tomorrow. With a commitment to innovation, sustainability, and efficiency, our team
              integrates state-of-the-art mechanical, electrical, plumbing, and fire protection systems to ensure
              seamless, reliable, and safe building operations. From design and installation to maintenance and
              optimization, we deliver tailored solutions that meet the unique needs of every project, enhancing
              performance while reducing energy consumption. Let us be your trusted partner in powering the future of
              infrastructure with MEPF systems that set the standard for quality and excellence.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="https://ik.imagekit.io/bcuxcmytn/sun-setting-silhouette-electricity-pylons.jpg?updatedAt=1740559034715"
              alt="Powering the Future of Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Rearranged layout: Text on left, image on right */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Text content */}
            <div className="md:w-1/2 flex flex-col justify-center text-left">
              <h3 className="text-3xl font-bold text-blue-900">Projects across the country</h3>
              <p className="mt-3 text-xl text-black">
                Over 200 projects across various types. From high-voltage substations to sophisticated building
                automation systems, we've successfully executed projects of all scales and complexities.
              </p>

              <div className="mt-6">
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <div className="text-base text-orange-600 font-medium mb-2">Gujarat</div>
                    <div className="text-base text-orange-600 font-medium mb-2">Maharashtra</div>
                    <div className="text-base text-orange-600 font-medium mb-2">Tamil Nadu</div>
                    <div className="text-base text-orange-600 font-medium mb-2">Karnataka</div>
                    <div className="text-base text-orange-600 font-medium">Kerala</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-base text-orange-600 font-medium mb-2">Goa</div>
                    <div className="text-base text-orange-600 font-medium mb-2">Uttar Pradesh</div>
                    <div className="text-base text-orange-600 font-medium mb-2">Delhi NCR</div>
                    <div className="text-base text-orange-600 font-medium mb-2">Odisha</div>
                    <div className="text-base text-orange-600 font-medium">Bihar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://ik.imagekit.io/bcuxcmytn/256-2568434_5-00-000-unique-trucks-and-growing-india%20(2).png?updatedAt=1741513529091"
                alt="Projects Across The Nation"
                width={500}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-center mt-24 mb-12 text-gray-700">Trusted by Industry Leaders</h2>
      <ClientLogosCarousel />
      {/* Key Features */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Us</h2>
            <p className="text-xl text-blue-700 mt-4">
              Delivering excellence in electrical infrastructure for over two decades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Highly skilled professionals with years of industry experience",
                icon: "👥",
              },
              {
                title: "Quality Assurance",
                description: "ISO certified processes ensuring top-notch service delivery",
                icon: "🤝🏼",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your infrastructure needs",
                icon: "🔧",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-blue-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#020e55] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center max-w-7xl mx-auto leading-relaxed p-4">
              <span className="tracking-wide">
                Building tomorrow with<span className="text-orange-400 font-extrabold"> MEPF Expertise</span>
              </span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="text-center mb-12">
              <a
                href="/infrastructure"
                className="inline-block px-6 py-3 text-lg text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Learn More About Our Infrastructure
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12 mt-24 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-blue-800">Our Specialisation</h3>
          <Link href="/specialization" className="text-blue-600 hover:text-blue-800 transition duration-300">
            Read More →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Electrical Infrastructure</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Power distribution systems</li>
              <li>Substation design and installation</li>
              <li>Emergency power solutions</li>
              <li>Energy-efficient lighting systems</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Industrial Automation</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>PLC and SCADA systems</li>
              <li>Process control automation</li>
              <li>Industrial IoT solutions</li>
              <li>Robotics integration</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Renewable Energy</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Solar power systems</li>
              <li>Wind energy solutions</li>
              <li>Energy storage systems</li>
              <li>Microgrid design and implementation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white py-16 relative overflow-hidden mt-24">
        <BackgroundGraphic className="absolute inset-0 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Supercharge your Infrastructure</h2>
            <p className="text-xl mb-8">A Super Grade Govt Licensed Contractor and ISO 9001:2015 certified company</p>
            <Link
              href="/about"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-white shadow-lg rounded-lg p-8 mt-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-blue-900">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-blue-100 shadow-md rounded-lg p-6 max-w-md mx-auto w-full">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Get in Touch</h3>
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
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-lg shadow-lg p-6 text-center max-w-md mx-auto w-full">
              <div>
                <h3 className="text-3xl font-semibold mb-6">Our Office</h3>
                <p className="mb-2 text-lg opacity-90">No.1006, 1st Main, 4th Block,</p>
                <p className="mb-2 text-lg opacity-90">Dr. Rajkumar Road, Rajajinagar</p>
                <p className="mb-2 text-lg opacity-90">Bangalore, Karnataka,</p>
                <p className="mb-8 text-lg opacity-90">India – 560010.</p>
                <div className="w-24 h-1 bg-white/30 mx-auto mb-8"></div>
                <h3 className="text-3xl font-semibold mb-6">Reach Us</h3>
                <p className="mb-2 text-lg opacity-90">Phone: 080-23387431</p>
                <p className="mb-2 text-lg opacity-90">Mobile: 9916473624</p>
                <p className="text-lg opacity-90">info@chaithanyaenterprises.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
