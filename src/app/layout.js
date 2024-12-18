import { Roboto_Flex, Teko } from "next/font/google";

import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });

export const metadata = {
  title: {
    template: "%s | 30 Seconds Of Knowledge",
    default: "30 Seconds Of Knowledge",
  },
  description: "Landing page for 30 seconds of knowledge",
  keywords: [
    "developer",
    "knowledge",
    "30 seconds",
    "react",
    "JS",
    "Ruby",
    "JavaScript",
  ],
  authors: [
    { name: "Danijela Djuric Petrovic", url: "https://github.com/dacadjuric" },
  ],
  siteName: "30 Seconds Of Knowledge",
  locale: "en_US",
  type: "website",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
    shortcut: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
    apple: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
  },
  openGraph: {
    title: "30 Seconds Of Knowledge",
    description:
      "With 30 Seconds Of Knowledge web extension become a better developer one new tab at a time",
    url: "https://www.30secondsofknowledge.com/",
    images: {
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      alt: "30 Seconds Of Knowledge logo photo",
      width: 1280,
      height: 800,
      type: "image/png",
    },
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
