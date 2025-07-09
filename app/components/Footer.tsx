import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="https://ik.imagekit.io/bcuxcmytn/logo.png?updatedAt=1740556557537"
                alt="Chaithanya Enterprises & Engineers Logo"
                width={70}
                height={70}
                className="mr-3"
                unoptimized
              />
              <h2 className="text-3xl font-bold">CEEIPL</h2>
            </div>
            <p className="text-lg text-blue-200 mb-4">Super Grade Licensed Electrical Contractors & Engineers</p>
            <p className="text-blue-200 mb-4">
              A trusted electro-mechanical contracting company with over two decades of experience in delivering
              high-quality solutions across various industries.
            </p>
            <div className="text-blue-200">
              <p className="mb-1">📍 No.1006, 1st Main, 4th Block, Dr. Rajkumar Road</p>
              <p className="mb-1">Rajajinagar, Bangalore, Karnataka - 560010</p>
              <p className="mb-1">📞 080-23387431 | 📱 9916473624, 9945840517</p>
              <p>✉️ info@chaithanyaenterprises.com</p>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-300">Sitemap</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-blue-200 hover:text-white transition duration-300">
                🏠 Home
              </Link>
              <Link href="/about" className="block text-blue-200 hover:text-white transition duration-300">
                ℹ️ About Us
              </Link>
              <Link href="/specialization" className="block text-blue-200 hover:text-white transition duration-300">
                ⚡ Specializations
              </Link>
              <Link href="/infrastructure" className="block text-blue-200 hover:text-white transition duration-300">
                🏗️ Infrastructure
              </Link>
              <Link href="/projects" className="block text-blue-200 hover:text-white transition duration-300">
                📋 Projects
              </Link>
              <Link href="/contact" className="block text-blue-200 hover:text-white transition duration-300">
                📞 Contact
              </Link>
              <Link href="/career" className="block text-blue-200 hover:text-white transition duration-300">
                💼 Careers
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-300">Our Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>🔌 Electrical Infrastructure</li>
              <li>🏭 Industrial Installation</li>
              <li>🏥 Hospital Works</li>
              <li>🏨 Hotels & Resorts</li>
              <li>🏢 Commercial Buildings</li>
              <li>🤖 Building Automation</li>
              <li>🔥 Fire Protection Systems</li>
              <li>📋 Design-Build Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-blue-200">
                &copy; 2025 Chaithanya Enterprises & Engineers (I) Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 text-blue-200">
              <span className="text-sm">ISO 9001:2015 Certified</span>
              <span className="text-sm">|</span>
              <span className="text-sm">Super Grade Licensed</span>
              <span className="text-sm">|</span>
              <span className="text-sm">MSME Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
