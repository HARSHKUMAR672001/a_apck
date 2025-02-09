import React from "react";
import Link from "next/link";
export default function RelocationServices() {
    const services = [
        { name: "Packers and Movers Services" },
        { name: "Local Packers and Movers Services" },
        { name: "Bike Shifting Services" },
        { name: "Home Shifting Services"},
        { name: "Domestic Relocation Services"},
        { name: "International Relocation Services" },
        { name: "Car Transportation Services"},
        { name: "Truck Rental Services"},
        { name: "Office Relocation Services"},
        { name: "Data Center Relocation Services"},
        { name: "Fine Art Moving Services"},
        { name: "Pet Relocation Services"},
    ];
    return (
        <>
            <section className="bg-blue-600 text-white text-center py-12"><h1 className="text-4xl font-bold">Our Services</h1><p className="mt-4 text-xl">Your trusted portal for relocation services</p></section>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-wrap gap-6">
                    <div className="w-full md:w-screen-2xl">
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                            <p className="text-lg text-gray-700">
                                Find your relocation service from trusted relocation companies in India. A-pack packers and movers brings you top-rated relocation companies from all major cities across the country. Whether you're looking for local or international moving services, we have you covered. Professional shifting companies are specialized in almost every type of relocation service, including household shifting, home relocation, office moving, and even international shipping.
                            </p>
                            <p className="text-lg text-gray-700 mt-4">
                                If you're looking for reliable Packers and Movers services, our platform lists the best movers and packers in India. We work with trusted brands like Agarwal Packers and Movers, known for their excellent service and affordability. From moving household goods to providing car and bike transportation services, these top packers and movers offer comprehensive solutions for all your relocation needs.
                            </p>
                            <p className="text-lg text-gray-700 mt-4">
                                At A-pack packers and movers, you can easily compare Packers and Movers price lists and get instant access to contact numbers and phone numbers for the top relocation service providers. Whether you're planning to shift within the city or across the country, we can help you find the best moving services near you. Our trusted moving companies ensure a smooth and hassle-free experience.
                            </p>
                            <p className="text-lg text-gray-700 mt-4">
                                Our service offerings include:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li><strong>Packers and Movers for Household Shifting</strong>: Relocate your home with ease and safety.</li>
                                <li><strong>Movers and Packers for Office Relocation</strong>: Move your office equipment and furniture with expert care.</li>
                                <li><strong>Bike Transportation Services</strong>: Safe and reliable transportation for your two-wheelers.</li>
                                <li><strong>Car Transportation Services</strong>: Get your car moved across cities securely.</li>
                                <li><strong>Bike Parcel Services</strong>: Parcel your bike to any location within India with trusted courier services.</li>
                            </ul>
                            <p className="text-lg text-gray-700 mt-4">
                                Looking for the best movers and packers for your relocation? You can rely on our detailed <strong>Packers and Movers reviews</strong> to make an informed decision. We provide you with insights into customer experiences and feedback on various relocation companies. Our platform helps you choose the best Packers and Movers for your specific needs.
                            </p>
                            <p className="text-lg text-gray-700 mt-4">
                                Whether you're looking for packers and movers within the city or seeking international relocation services, A-pack packers and movers has the best options for you. Start your search now for trusted Packers and Movers services, and get the best quotes from top relocation companies. For more information, feel free to reach out to us at
                                <a href="mailto:report@assureshift.in?subject=Reporting%20About&body=Hi%20Assure%20Shift,%0A%0AI%20would%20like%20to%20report%20....." className="text-blue-500 hover:underline">apack@.in</a>.
                            </p>
                        </div>
                        <div className="w-full md:w-screen-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {services.map((service, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition">
                                        <Link href={`/service/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-semibold text-blue-500 hover:text-blue-700">
                                            {service.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
