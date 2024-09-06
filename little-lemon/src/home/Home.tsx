import DeliveryContent from "../components/delivery/DeliveryContent";
import Offerings from "../components/Offerings/Offerings";
import OurLocation from "../components/OurLocation/OurLocation";
import DiscountBanner from "./components/DiscountBanner";
import HomeBanner from "./components/HomeBanner";
import "./Home.css";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <DiscountBanner />
      <DeliveryContent />
      <Offerings />
      <OurLocation />
    </>
  );
}
