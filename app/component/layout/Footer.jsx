import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import FooterData from '../../utils/Footer';
import Link from 'next/link';
import one from '../../../public/hh2.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-600 to-blue-300 text-white font-sans dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <img src={one.src} alt=" hhh" className="h-20" />
            <p className="mt-4 text-lg text-gray-200">Providing reliable and efficient relocation services to make your move stress-free.</p>

            <div className="flex mt-8 gap-6">
              <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          {Object.keys(FooterData).map((category) => (
            <div key={category}>
              <p className="font-semibold text-xl">{category}</p>
              <div className="flex flex-col items-start mt-5 space-y-3">
                {FooterData[category].map((item, index) => (
                  // <Link
                  //   key={index}
                  //   href={`/service/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  //   className="text-lg text-gray-200 hover:text-xl hover:font-semibold transition-all duration-300 ease-in-out"
                  // >
                  //   {item}
                  // </Link>
                  <span className="text-lg text-gray-200 hover:text-xl hover:font-semibold transition-all duration-300 ease-in-out" key={index} >{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-400 dark:border-gray-700" />

        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-200">© 2023 Agarwal Package and Movers. All rights reserved.</p>
          <div className="flex mt-4 space-x-6">
            <a href="tel:+91 8688815001" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
              <FaPhoneAlt size={20} />
            </a>
            <a href="mailto:contact@agarwalmovers.com" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
              <FaEnvelope size={20} />
            </a>
            <a href="https://www.google.com/maps" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
              <FaMapMarkerAlt size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
