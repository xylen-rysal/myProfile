import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sailesh Risal - Computer Engineering Student | Portfolio",
  description:
    "Computer Engineering student specializing in full-stack development with JavaScript, Python, React, Next.js, and more. Available for internships.",
  keywords:
    "computer engineering, student, portfolio, javascript, python, react, nextjs, internship, full-stack developer",
  authors: [{ name: "Sailesh Risal" }],
  creator: "Sailesh Risal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saileshrisal.com.np",
    title: "Sailesh Risal - Computer Engineering Student Portfolio",
    description: "Computer Engineering student specializing in full-stack development. Available for internships.",
    siteName: "Sailesh Risal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sailesh Risal - Computer Engineering Student Portfolio",
    description: "Computer Engineering student specializing in full-stack development. Available for internships.",
    creator: "@HDynamax",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
