import NewLocation from "../component/location/Location";

export async function generateMetadata({ params }) {
  if (!params || !params.name) return {};

  const name = decodeURIComponent(params.name);

  const keywords = [
    `Packers and Movers in ${name}`,
    `Movers and Packers in ${name}`,
    `Household shifting in ${name}`,
    `Home Relocation in ${name}`,
    `Agarwal Packers and Movers in ${name}`,
    `Packers and Movers Price List in ${name}`,
    `Packers and Movers Contact no & Phone no in ${name}`,
    `Packers and Movers Within City in ${name}`,
    `Top Packers and Movers in ${name}`,
    `Best Packers and Movers in ${name}`,
    `Bike transportation services in ${name}`,
    `Car transportation services in ${name}`,
    `Bike parcel services in ${name}`,
    `Packers and Movers Review in ${name}`,
    `Best Movers in ${name}`,
    `Affordable Packers and Movers in ${name}`
  ];
  return {
    title: `${name} - Explore Our Services`,
    description: `Find top Packers and Movers services in ${name}. Get reliable relocation, shifting, and transportation solutions.`,
    keywords,
    openGraph: {
      title: `${name} - Explore Our Services`,
      description: `Check out our Packers and Movers services in ${name}.`,
      type: "website",
      url: `https://yourwebsite.com/${name}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} - Explore Our Services`,
      description: `Discover the best Packers and Movers services in ${name}.`,
    },
  };
}

export default function NewLocations({ params }) {
  if (!params || !params.name) return <p>Loading...</p>;

  const name = decodeURIComponent(params.name);

  return (
    <>
      <NewLocation />
    </>
  );
}
