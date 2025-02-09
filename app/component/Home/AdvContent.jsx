import { FaTruckMoving, FaPlaneDeparture, FaShip } from 'react-icons/fa';
import Image from 'next/image';
import im1 from "../../../public/relocation-img-2.jpg";
import im2 from "../../../public/relocation-img-3.jpg";
import im3 from "../../../public/relocation-img-4.jpg";
const ServicesSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-10">
            {/* Heading */}
            <div className="text-center mb-8">
                <h4 className="text-lg font-semibold text-gray-500">Our Services</h4>
                <h2 className="text-2xl font-bold text-gray-800">
                    Professional Company Providing 100% Reliable & Trusted Service
                </h2>
            </div>

            {/* Rotating Cards Section */}
            <div className="relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="card flex-shrink-0 w-full  p-5  m-3 bg-white shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="service-image w-full h-96 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            {/* <img src="https://via.placeholder.com/500" alt="Moving By Road" className="w-full h-full object-cover" /> */}
                            <Image src={im1} alt="Moving By Road" className="w-full h-full object-fill" />
                        </div>
                        <div className="service-icon flex justify-center text-center text-green-500 mb-4  transform transition-opacity duration-700 hover:opacity-100">
                            <FaTruckMoving className="text-5xl" />
                        </div>
                        <div className="service-text p-4 text-center  transform transition-opacity duration-700 hover:opacity-100">
                            <h3 className="text-3xl font-semibold">Moving By Road</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card flex-shrink-0 w-full mx-4 p-5 m-3 bg-white shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="service-image w-full h-96 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            {/* <img src="https://via.placeholder.com/500" alt="Moving By Air" className="w-full h-full object-cover" /> */}
                            <Image src={im2} alt="Moving By Air" className="w-full h-full object-fill" />
                        </div>
                        <div className="service-icon flex justify-center text-center text-green-500 mb-4  transform transition-opacity duration-700 hover:opacity-100">
                            <FaPlaneDeparture className="text-5xl" />
                        </div>
                        <div className="service-text p-4 text-center  transform transition-opacity duration-700 hover:opacity-100">
                            <h3 className="text-lg font-semibold">Moving By Air</h3>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card flex-shrink-0 w-full mx-4 p-5 m-3 bg-white shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="service-image w-full h-96 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            {/* <img src="https://via.placeholder.com/500" alt="Moving By Ship" className="w-full h-full object-cover" /> */}
                            <Image src={im3} alt="Moving By Ship" className="w-full h-full object-fill" />
                        </div>
                        <div className="service-icon flex justify-center text-center text-purple-500 mb-4  transform transition-opacity duration-700 hover:opacity-100">
                            <FaShip className="text-5xl" />
                        </div>
                        <div className="service-text p-4 text-center  transform transition-opacity duration-700 hover:opacity-100">
                            <h3 className="text-lg font-semibold">Moving By Ship</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
