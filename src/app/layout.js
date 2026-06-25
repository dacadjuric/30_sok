import { Roboto_Flex, JetBrains_Mono, Teko } from "next/font/google";

import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });

const SITE_URL = "https://www.30secondsofknowledge.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | 30 Seconds Of Knowledge",
    default:
      "Don't let your engineering brain rot in the age of AI | 30 Seconds Of Knowledge",
  },
  description:
    "Don't let your engineering brain rot in the age of AI. 30 Seconds of Knowledge delivers one real code snippet on every new tab - read it, get it, stay sharp in 30 seconds.",
  keywords: [
    "browser extension",
    "new tab extension",
    "code snippets",
    "developer learning",
    "JavaScript",
    "Python",
    "React",
    "programming",
    "web development",
    "Chrome extension",
    "Firefox add-on",
    "30 seconds of knowledge",
  ],
  referrer: "strict-origin-when-cross-origin",
  manifest: "/icons/site.webmanifest",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icons/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title:
      "Don't let your engineering brain rot in the age of AI | 30 Seconds Of Knowledge",
    description:
      "AI writes the code. You forget how it works. Get one real code snippet on every new tab and stay sharp in 30 seconds. 1500+ snippets, free.",
    url: SITE_URL,
    siteName: "30 Seconds Of Knowledge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/open_graph.jpg",
        alt: "30 Seconds Of Knowledge - code snippet browser extension",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don't let your engineering brain rot in the age of AI",
    description:
      "AI writes the code. You forget how it works. Get one real code snippet on every new tab and stay sharp - JavaScript, Python, React, and more.",
    images: [
      {
        url: "/twitter.jpg",
        alt: "Banner image for the website 30 Seconds Of Knowledge with logo",
        width: 1200,
        height: 600,
      },
    ],
  },
};

export const viewport = {
  themeColor: "#0e1217",
};

const jsonLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "30 Seconds of Knowledge",
    url: SITE_URL,
    description:
      "A browser extension that replaces your new tab with one real code snippet to read in 30 seconds.",
    image: `${SITE_URL}/schema.jpg`,
    author: {
      "@type": "Person",
      name: "Danijela Đurić Petrović",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "30 Seconds of Knowledge",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome, Firefox, Edge",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "25000",
    },
    url: SITE_URL,
    image: `${SITE_URL}/schema.jpg`,
    description:
      "Browser extension that shows one real code snippet on every new tab - JavaScript, Python, React, Git, and more.",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${mono.variable} ${roboto.variable} ${teko.variable} font-mono`}
      >
        <Loader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
