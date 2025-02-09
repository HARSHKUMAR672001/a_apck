


import Head from "next/head";

export default function LocationPage({ url }) {
    const location = url;

    if (!location) return <p>Loading...</p>;

    const formattedLocation = location
        .toString()
        .replace(/[\/?;'\[\]]/g, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const keywords = [
        `Packers and Movers in {formattedLocation}`,
        `Movers and Packers in {formattedLocation}`,
        `Household Shifting in {formattedLocation}`,
        `Home Relocation in {formattedLocation}`,
        `Agarwal Packers and Movers in {formattedLocation}`,
        `Packers and Movers Price List in {formattedLocation}`,
        `Packers and Movers Contact No in {formattedLocation}`,
        `Packers and Movers Within City in {formattedLocation}`,
        `Top Packers and Movers in {formattedLocation}`,
        `Best Packers and Movers in {formattedLocation}`,
        `Bike Transportation Services in {formattedLocation}`,
        `Car Transportation Services in {formattedLocation}`,
        `Bike Parcel Services in {formattedLocation}`,
        `Packers and Movers Review in {formattedLocation}`
    ];

    return (
        <>
            <Head>
                <title>{`Packers and Movers in {formattedLocation} | Best Moving Services`}</title>
                <meta name="description" content={`Looking for the best packers and movers in {formattedLocation}? Get affordable and hassle-free relocation services for homes, offices, and vehicles. Contact us today!`} />
                <meta name="keywords" content={keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Your Company Name" />
                <link rel="canonical" href={`https://yourwebsite.com/packers-and-movers-in-{formattedLocation.replace(/\s+/g, "-").toLowerCase()}`} />
                <meta property="og:title" content={`Packers and Movers in {formattedLocation} | Best Moving Services`} />
                <meta property="og:description" content={`Relocate smoothly with top-rated packers and movers in {formattedLocation}. Safe & affordable shifting for homes, offices, bikes, and cars.`} />
                <meta property="og:url" content={`https://yourwebsite.com/packers-and-movers-in-{formattedLocation.replace(/\s+/g, "-").toLowerCase()}`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://yourwebsite.com/seo-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Packers and Movers in {formattedLocation} | Best Moving Services`} />
                <meta name="twitter:description" content={`Need reliable packers and movers in {formattedLocation}? Get expert relocation services for homes, offices, and vehicles.`} />
                <meta name="twitter:image" content="https://yourwebsite.com/seo-image.jpg" />
            </Head>


            <div className="container mx-auto px-5 py-10">
                <h1 className="text-4xl font-extrabold text-left text-blue-700">
                    Packers and Movers in {formattedLocation}
                </h1>
                <p className="text-lg text-left mt-4 text-gray-700">
                    Are you searching for reliable and affordable <strong>Packers and Movers in {formattedLocation}</strong>? Look no further! We specialize in providing top-notch <strong>Movers and Packers</strong> services, ensuring a seamless and stress-free <strong>Household Shifting</strong> experience. Whether you're moving locally or across the city, our team of experts is here to make your <strong>Home Relocation</strong> smooth and efficient. With trusted services like <strong>Agarwal Packers and Movers</strong>, we guarantee the best moving solutions tailored to your needs.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-2xl font-semibold text-left text-blue-700">Why Choose Our Packers and Movers?</h2>
                    <p className="text-gray-700 mt-4">
                        Moving can be a daunting task, but with the right <strong>Packers and Movers in {formattedLocation}</strong>, it becomes a breeze. Here’s why we are the preferred choice for thousands of customers:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li><strong>Affordable Rates:</strong> We offer competitive pricing for all <strong>Movers and Packers</strong> services, ensuring you get the best value for your money.</li>
                        <li><strong>Professional Packing:</strong> Our team uses high-quality packing materials to ensure the safety of your belongings during <strong>Household Shifting</strong>.</li>
                        <li><strong>On-Time Delivery:</strong> We understand the importance of time, and our <strong>Home Relocation</strong> services are designed to meet deadlines without compromising quality.</li>
                        <li><strong>Insurance Coverage:</strong> Your belongings are precious, and we provide insurance coverage for added peace of mind.</li>
                        <li><strong>Experienced Team:</strong> With years of experience, our team handles every aspect of your move with professionalism and care.</li>
                    </ul>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {[
                        { title: "🏠 Household Shifting", desc: `Our expert <strong>Household Shifting</strong> services in ${formattedLocation} ensure a smooth transition for your home move. From packing to unpacking, we handle it all.` },
                        { title: "🚚 Movers and Packers", desc: `Looking for reliable <strong>Movers and Packers</strong> in ${formattedLocation}? We provide safe and secure transportation for all your belongings.` },
                        { title: "📦 Home Relocation", desc: `Planning a <strong>Home Relocation</strong>? Our end-to-end moving solutions in ${formattedLocation} make the process hassle-free and efficient.` }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-left">
                            <h2 className="text-xl font-semibold text-blue-700">{service.title}</h2>
                            <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: service.desc }}></p>
                        </div>
                    ))}
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold text-left text-blue-700">Packers and Movers Price List in {formattedLocation}</h2>
                    <p className="text-gray-700 mt-4 text-left">Here’s an estimated cost for our moving services:</p>
                    <table className="w-full mt-4 border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-blue-200 text-blue-800">
                                <th className="border border-gray-300 px-4 py-2">Service</th>
                                <th className="border border-gray-300 px-4 py-2">Estimated Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-700">
                                <td className="border border-gray-300 px-4 py-2">1 BHK Home Shifting</td>
                                <td className="border border-gray-300 px-4 py-2">₹5,000 - ₹10,000</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="border border-gray-300 px-4 py-2">2 BHK Home Shifting</td>
                                <td className="border border-gray-300 px-4 py-2">₹8,000 - ₹15,000</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="border border-gray-300 px-4 py-2">Office Relocation</td>
                                <td className="border border-gray-300 px-4 py-2">₹15,000 - ₹40,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg mt-8 text-left">
                    <h2 className="text-2xl font-semibold text-blue-700">Packers and Movers Contact No in {formattedLocation}</h2>
                    <p className="text-gray-700 mt-4">
                        Need immediate assistance? Call our moving experts now!
                    </p>
                    <p className="mt-4 text-2xl font-bold text-blue-700">📞 +91 98765 43210</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-left text-blue-700">Frequently Asked Questions</h2>
                    <div className="mt-5">
                        {[
                            { q: `What are the charges for Packers and Movers in ${formattedLocation}?`, a: `The cost depends on factors like distance, volume of goods, and additional services like packing or insurance.` },
                            { q: "Do you provide insurance coverage?", a: "Yes, all our moving services include insurance to protect your valuables." },
                            { q: "How long does the moving process take?", a: "The duration depends on the distance, load size, and weather conditions." },
                            { q: "Do you offer packing materials?", a: "Yes, we use high-quality packing materials to ensure the safety of your belongings." }
                        ].map((faq, index) => (
                            <details key={index} className="border-b border-gray-300 py-3">
                                <summary className="cursor-pointer font-semibold">{faq.q}</summary>
                                <p className="mt-2 text-gray-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}