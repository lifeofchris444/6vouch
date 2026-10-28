import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.gta6discounts.com"
const SITE_NAME = "GTA 6 Discounts"
const TITLE = "The GTA 6 Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how gamers are unlocking hidden discount codes on GTA 6 pre-orders and special editions, consoles and bundles, in-game currency, and merch and gaming gear. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "GTA 6 discount code",
    "GTA 6 promo code",
    "GTA 6 discounts",
    "GTA 6 pre-order deals",
    "GTA VI special edition discount",
    "PS5 console bundle deals",
    "Xbox Series X GTA 6 bundle",
    "GTA Online cash card discount",
    "video game discounts",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "games",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1408,
        height: 768,
        alt: "A game controller, a white console, a boxed video game, a gift card, and a folded graphic t-shirt with a palm tree figurine on a hot pink and sunset orange background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#E6207A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
