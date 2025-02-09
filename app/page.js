import  Hero from './component/Home/Hero'
import About from './component/Home/AboutSection'
import GetInTouch from './component/Home/Contact'
import ServicesSection from './component/Home/AdvContent'
import CityListSection from './component/Home/NewLocationSection'
import Description from './component/Home/Desc'
export default function Home() {
  const cities = [
    "Ambikapur", "Bhilai", "Durg", "Bilaspur", "Chirmiri", "Korba City", "Raigarh", "Raipur",
    "Ajmer", "Alwar", "Jaipur", "Bhilwara", "Bikaner", "Chittorgarh", "Jaisalmer", "Jawahar Nagar",
    "Jodhpur", "Kota", "Malviya Nagar", "Sikar", "Udaipur", "Vaishali Nagar", "Vidhyadhar Nagar",
    "Neemrana", "Neem Ka Thana", "Sajhapur", "Sharapura", "Agra", "Aligarh", "Allahabad", "Amroha",
    "Azamgarh", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti",
    "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad",
    "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda",
    "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj",
    "Kanpur", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow",
    "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad",
    "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal",
    "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Sitapur", "Sonbhadra", "Sultanpur",
    "Unnao", "Varanasi"
  ];
  
  
  return (
    <div>
      <Hero />
      <About />
      <GetInTouch />
      <ServicesSection />
      <CityListSection cityData={cities} title="Get Free Shifting Estimate From Top Packers and Movers in Your City"/>;
      <Description />
    </div>
  )
}