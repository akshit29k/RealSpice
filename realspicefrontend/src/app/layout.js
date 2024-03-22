import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartContext } from "./context/CartContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "realspices.in - Feel the flavours",
  description: "Have you ever tasted anything so delicious? Now you can - Try out some real spices and snacks which make your food more tastier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><CartContext><Navbar/>{children}<Footer/></CartContext></body>
      
    </html>
  );
}
