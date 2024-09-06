import { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import CheckIfWeDeliveryToYouModule from "./components/CheckIfWeDeliveryToYouModule";
import DeliveryFilter from "./components/DeliveryFilter";
import "./DeliveryContent.css";

export default function DeliveryContent() {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  return (
    <section id="delivery">
      <h2>Order for delivery!</h2>
      <DeliveryFilter
        selectedBadges={selectedBadges}
        setSelectedBadges={setSelectedBadges}
      />
      <section id="delivery-content">
        <MenuItems categories={selectedBadges} preview />
        <CheckIfWeDeliveryToYouModule />
      </section>
    </section>
  );
}
