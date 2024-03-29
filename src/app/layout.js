import { Inter } from "next/font/google";
import Header from "../../components/header/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "30 Seconds Of Knowledge",
  description: "Landing page of 30 seconds og knowledge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
