import LocationData from "../../utils/Location";
import Link from "next/link";

export default function PackersMoversPage() {
  return (
    <>
      <section className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Explore Packers & Movers Service Locations</h1>
      </section>
      <div className="p-10 w-full min-h-screen bg-gray-50 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl px-6">
          {Object.keys(LocationData).map((state) => (
            <div
              key={state}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <h2 className="bg-gradient-to-r from-blue-600 to-blue-300 text-white text-xl p-5 text-center font-semibold uppercase">
                {state}
              </h2>
              <ul className="flex-1 p-5 space-y-3 overflow-y-auto max-h-80 no-scrollbar">
                {LocationData[state]["Packers Movers"].map((city) => (
                  <li key={city}>
                    <Link
 href={`${state.toLowerCase().replace(/\s+/g, '-')}-${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2.5 px-4 bg-gray-50 rounded-lg text-gray-700 text-center font-medium hover:bg-gray-200 hover:text-gray-900 transition duration-200"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
