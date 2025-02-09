import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Importing WhatsApp and Phone icons

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata for the Entire Website
export const metadata = {
  title: "Top Packers and Movers | Best Relocation Services",
  description: "Find the best Packers and Movers for safe and affordable home relocation, shifting, and transport services.",
  keywords: [
    "Packers and Movers",
    "Movers and packers",
    "Household shifting",
    "Home Relocation",
    "Agarwal packers and movers",
    "Packers and Movers Price List",
    "Packers and Movers Contact no & Phone no",
    "Packers and Movers Within City",
    "Top packers and movers",
    "Best Packers and movers",
    "Bike transportation services",
    "Car transportation services",
    "Bike parcel services",
    "Packers and Movers Review",
  ].join(", "),
  openGraph: {
    title: "Best Packers and Movers - Safe Relocation Services",
    description: "Top-rated Packers and Movers for hassle-free shifting, transportation, and relocation services.",
    type: "website",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Packers and Movers - Safe Relocation Services",
    description: "Get expert Packers and Movers for home shifting, office relocation, and vehicle transportation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />

        {/* WhatsApp and Phone icons at the bottom */}
        <div className="fixed bottom-5 right-5 flex gap-4">
          {/* WhatsApp Icon */}
          <a href="https://wa.me/8800288159" target="_blank" rel="noopener noreferrer">
            <div className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
              <FaWhatsapp size={30} />
            </div>
          </a>
          
          {/* Phone Icon */}
          <a href="tel:91 8800288159" target="_blank" rel="noopener noreferrer">
            <div className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
              <FaPhoneAlt size={30} />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
