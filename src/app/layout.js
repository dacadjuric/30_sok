import { Roboto_Flex, Teko } from "next/font/google";

import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });

export const metadata = {
  title: "30 Seconds Of Knowledge",
  description: "Landing page for 30 seconds of knowledge",
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
