import Header from "../../components/header/header";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer/footer";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "30 Seconds Of Knowledge",
  description: "Landing page for 30 seconds of knowledge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
