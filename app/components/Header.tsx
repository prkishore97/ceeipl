"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [activeTab, setActiveTab] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // For active tab detection
      if (
        window.location.pathname !== "/infrastructure" &&
        window.location.pathname !== "/projects" &&
        window.location.pathname !== "/specialization" &&
        window.location.pathname !== "/about" &&
        window.location.pathname !== "/contact"
      ) {
        const sections = ["home", "specialization", "about", "contact"]
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom > 100
          }
          return false
        })
        if (currentSection) {
          setActiveTab(currentSection)
        }
      }

      // For navigation bar visibility
      const currentScrollPos = window.scrollY

      // Make the navbar visible when scrolling up or at the top of the page
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setNavVisible(isVisible)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveTab("")
    } else if (window.location.pathname === "/infrastructure") {
      setActiveTab("infrastructure")
    } else if (window.location.pathname === "/projects") {
      setActiveTab("projects")
    } else if (window.location.pathname === "/specialization") {
      setActiveTab("specialization")
    } else if (window.location.pathname === "/about") {
      setActiveTab("about")
    } else if (window.location.pathname === "/contact") {
      setActiveTab("contact")
    } else if (window.location.pathname === "/careers") {
      setActiveTab("careers")
    }
  }, [])

  const navItems = ["home", "about", "specialization", "infrastructure", "projects", "contact", "career"]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-[#020e55]/95 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 w-full z-[100]">
      {/* Top section with logo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://media-hosting.imagekit.io//9692be0dfd80499f/PNG%20.png?Expires=1833092998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Sxr4Jg10okDcb0y2rnS2D-M~MqKhuaWIVw7TLRisAD2ComVjGm32qap4l1EN93H6R7ALn-Sea-RJi7QtVLNAYUEO997vv89syn0ZqHzcQZrZFoKfWpX4dnWehG~IC7FjG8pMSgIzrAIGCdTDQOfP7DpGoaDWkzxOi6E91LxvXpUVQ9ovzkYNHr47ejRY~1koDqmvx8cveW03QaIIE9Se2gGyte59rpCDE4wif1LQT2crzvrSJw~Aw7sEUZ4Af6A7zJlL35y87WC71Lcmy~XeoYb~xqnXeYHQBys9IIzo9CDjCrIuamoWyt5~7wyBMNpwcCGuKPt10wq4yHJ0bO~3fw__"
              alt="Chaithanya Enterprises & Engineers Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="flex flex-col">
              <span className="hidden md:inline text-xl tracking-tight bg-gradient-to-r from-orange-300 via-white to-orange-300 text-transparent bg-clip-text animate-gradient-x font-semibold">
                CHAITHANYA ENTERPRISES & ENGINEERS (I) PVT LTD
              </span>
              <span className="md:hidden text-xl font-medium text-white tracking-tight">CEEIPL</span>
              <span className="text-sm font-normal text-blue-200">
                Super Grade Licensed Electrical Contractors & Engineers
              </span>
            </span>
          </Link>

          {/* Mobile navigation - simplified version */}
          <div className="md:hidden">
            <select
              className="bg-[#020e55] text-white border border-blue-700 rounded-md px-2 py-1"
              onChange={(e) => {
                const value = e.target.value
                setActiveTab(value)
                const href = value === "home" ? "/" : `/${value}`
                window.location.href = href
              }}
              value={activeTab}
            >
              {navItems.map((item) => (
                <option key={item} value={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bottom section with navigation - with scroll behavior */}
      <div
        className={`bg-[#020e55] border-t border-blue-800 hidden md:block transition-all duration-300 ease-in-out ${
          navVisible ? "max-h-16 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <ul className="flex flex-row flex-wrap justify-center gap-3">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "home" ? "/" : `/${item}`}
                  className={`px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors duration-200 rounded-md ${
                    activeTab === item ? "bg-blue-800" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(item)
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
