import { Roboto_Flex, Teko } from "next/font/google";

import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });

export const metadata = {
  metadataBase: new URL("https://www.30secondsofknowledge.com"),
  title: {
    template: "%s | 30 Seconds Of Knowledge",
    default: "30 Seconds Of Knowledge",
  },

  description:
    "Boost your coding skills in just 30 seconds! 30 Seconds of Knowledge delivers quick, high-quality code snippets and interview questions on every new tab.",

  keywords: [
    "developer",
    "learning",
    "nextjs",
    "30 seconds",
    "react",
    "JS",
    "Ruby",
    "JavaScript",
  ],
  referrer: "strict-origin-when-cross-origin",
  siteName: "30 Seconds Of Knowledge",
  locale: "en_US",
  type: "website",
  icons: {
    icon: "./assets/metaImages/icons/favicon.ico",
    shortcut: "./assets/metaImages/icon.png",
    apple: "./assets/metaImages/icons/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "30 Seconds Of Knowledge",
    description:
      "Boost your coding skills in just 30 seconds! 30 Seconds of Knowledge delivers quick, high-quality code snippets and interview questions on every new tab.",
    url: "https://www.30secondsofknowledge.com/",
    siteName: "30 Seconds Of Knowledge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "../../assets/open_graph.jpg",
        alt: "30 Seconds Of Knowledge photo",
        width: 800,
        height: 600,
        type: "image/jpg",
      },
      {
        url: "./assets/schema.jpg",
        alt: "30 Seconds Of Knowledge photo",
        width: 1800,
        height: 1600,
        type: "image/jpg",
      },
    ],
    updatedTime: "2025-02-04T12:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Seconds of Knowledge",
    description:
      "Learn to code faster! Get bite-sized coding knowledge with high-quality snippets on every new tab. Master JavaScript, Python, React, and more.",
    image: "./assets/twitter.jpg",
    imageAlt: "Banner image for the website 30 Seconds Of Knowledge with logo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${teko.variable} ${roboto.variable}`}
      >
        <Loader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
