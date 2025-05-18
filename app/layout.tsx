import "./globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import type React from "react"
import BackgroundGraphic from "./components/BackgroundGraphic"
import Header from "./components/Header"
import Footer from "./components/Footer"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "CEEIPL",
  description: "Super Grade Licensed Electrical Contractors & Engineers.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <head>
        <link
          rel="icon"
          href="https://media-hosting.imagekit.io//b568f68881c34b52/favicon.ico?Expires=1833123545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0r0VC2khj17OLLM03YtqWtd-GyFAwxAVjtUABBQa8tBkq2Lwxbn7JY83ekEfALIMgRxu2btlMjS-BCENQJsywKNmtB5QmweHYj~oUIK29Ex-hsn1EJEY5hWRunqOfBZyOUYJA58t5vusaPVl-CQ-vsbVsmxiV8Ayk5vSnbhYNcWCt9ojeiIyUKfIV9mKl1WLaaDYs5~JS4L5lhHY4Cq5fEafn0r25xVy8Ffqcv7OhYr~z72-F19hOSc28bBIvE6Mg5U2SnP22JbTpOzwCJqb0U0kNXdl8niEl8co5xTTjIvvtju8xTSRQ729TuNhmkeTw64DeOmDiH~Q78ZxPfI-oA__"
        />
        <meta name="google-site-verification" content="Tap0xU1B0YdjF08tRkeeCowK9hx4dXlm-qKCjCWPQes" />

        {/* Google Analytics and Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-36PC5EZKT8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-36PC5EZKT8');
          `,
          }}
        />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen bg-blue-50 relative overflow-hidden">
          <BackgroundGraphic />
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
