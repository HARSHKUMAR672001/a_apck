import { FaTruckMoving, FaPlaneDeparture, FaShip } from 'react-icons/fa';
import Image from 'next/image';
import im1 from "../../../public/relocation-img-2.jpg";
import im2 from "../../../public/relocation-img-3.jpg";
import im3 from "../../../public/relocation-img-4.jpg";

const ServicesSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4">
            {/* Heading */}
            <div className="text-center mb-8">
                <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                    Our Services
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                    Professional Company Providing 100% Reliable & Trusted Service
                </h2>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group relative bg-white dark:bg-gray-800 shadow-lg rounded-lg md:p-5 transition-transform duration-500 hover:scale-105">
                    <div className=" md:h-72 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <Image src={im1} alt="Moving By Road" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center text-green-500 dark:text-green-400 mt-4">
                        <FaTruckMoving className="text-5xl" />
                    </div>
                    <h3 className="text-center text-xl font-semibold text-gray-800 dark:text-white mt-2">
                        Moving By Road
                    </h3>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 transition-transform duration-500 hover:scale-105">
                    <div className=" md:h-72 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <Image src={im2} alt="Moving By Air" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center text-blue-500 dark:text-blue-400 mt-4">
                        <FaPlaneDeparture className="text-5xl" />
                    </div>
                    <h3 className="text-center text-xl font-semibold text-gray-800 dark:text-white mt-2">
                        Moving By Air
                    </h3>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 transition-transform duration-500 hover:scale-105">
                    <div className=" md:h-72 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <Image src={im3} alt="Moving By Ship" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center text-purple-500 dark:text-purple-400 mt-4">
                        <FaShip className="text-5xl" />
                    </div>
                    <h3 className="text-center text-xl font-semibold text-gray-800 dark:text-white mt-2">
                        Moving By Ship
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
