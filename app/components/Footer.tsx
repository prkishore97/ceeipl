import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
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
            <p className="text-lg text-blue-200 mt-2">Super Grade Licensed Electrical Contractors & Engineers</p>
          </div>
          <nav className="flex flex-col items-start space-y-3">
            <Link href="/" className="text-lg hover:text-blue-300 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-blue-300 transition duration-300">
              About
            </Link>
            <Link href="/specialization" className="text-lg hover:text-blue-300 transition duration-300">
              Specialization
            </Link>
            <Link href="/infrastructure" className="text-lg hover:text-blue-300 transition duration-300">
              Infrastructure
            </Link>
            <Link href="/projects" className="text-lg hover:text-blue-300 transition duration-300">
              Projects
            </Link>
            <Link href="/contact" className="text-lg hover:text-blue-300 transition duration-300">
              Contact
            </Link>
            <Link href="/career" className="text-lg hover:text-blue-300 transition duration-300">
              Careers
            </Link>
          </nav>
        </div>
        <div className="mt-12 text-center text-lg text-blue-200">
          &copy; 2025 Chaithanya Enterprises & Engineers (I) Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
