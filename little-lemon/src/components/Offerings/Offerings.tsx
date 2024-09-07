import OpeningHours from "../OpeningHours";
import Offering from "./components/Offering";
import "./Offerings.css";

export default function Offerings() {
  return (
    <>
      <section id="offerings">
        <h2>Our offerings</h2>
        <section id="offerings-content">
          <Offering
            id="table-reservation"
            title="Reserve a table for our restaurant"
            description={
              <p>
                A night out? Or family visiting? Reserve a table now for a nice
                evening with rich food flavors
              </p>
            }
            buttonText="Reserve a table"
            url="/booking"
            imageAlt="Mario and Adrian talks together in the kitchen"
            imageUrl="/little-lemon-icons/Mario and Adrian A.jpg"
          />
          <Offering
            id="discount-member"
            title="Enjoy discounts in our membership program!"
            description={
              <p>
                By becomming a little lemmonie. You will get discounts and
                special offers on all evening nights
              </p>
            }
            buttonText="Become a lemonie!"
            url="/contact"
            imageAlt="Mario prepares a lovely dish"
            imageUrl="/little-lemon-icons/restaurant chef B.jpg"
          />
          <Offering
            id="opening-hours"
            title="Opening Hours"
            description={<OpeningHours />}
            imageAlt="Mario and Adrian prepares food together"
            imageUrl="/little-lemon-icons/Mario and Adrian b.jpg"
            hideButton
          />
          <article></article>
        </section>
      </section>
    </>
  );
}
