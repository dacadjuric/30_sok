import { Inter } from "next/font/google";
import Header from "../../components/header/header";

import "./globals.css";
import Footer from "../../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "30 Seconds Of Knowledge",
  description: "Landing page for 30 seconds of knowledge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
