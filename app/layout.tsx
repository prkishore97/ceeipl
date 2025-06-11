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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#020e55" />
        <meta name="msapplication-TileColor" content="#020e55" />

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
