import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="about-us">
      <section id="about-us-banner">
        <img
          src="/little-lemon-icons/Mario and Adrian b.jpg"
          alt="Mario and Adrian standing over some food they are preparing"
        />
        <article>
          <h1>About us</h1>
        </article>
      </section>
      <section id="about-us-content">
        <article id="family-company">
          <img
            src="/little-lemon-icons/restaurant chef B.jpg"
            alt="Mario preparing some food"
          />
          <div className="container">
            <h2>Family Company</h2>
            <p>
              Little lemon is a family run company that has been around for four
              generations since the 1960s. We have always strived to do be the
              best downtown restaurant in Chicago
            </p>
          </div>
        </article>
        <article id="family-friendly">
          <div className="container">
            <h2>Family Friendly</h2>
            <p>
              While there is alot of other family restaurants in Chicago, We
              strive to be the best family friendly alternative, offering good
              facilities for families of all sizes
            </p>
          </div>
          <img
            src="/little-lemon-icons/greek salad.jpg"
            alt="a dish of greek salad"
          />
        </article>
        <article id="family-supporting">
          <img
            src="/little-lemon-icons/restaurant.jpg"
            alt="our restaurant from the inside"
          />
          <div className="container">
            <h2>Family Supporting</h2>
            <p>
              Little lemon has since the 90s supported different charity
              organisations aiming to provide financial support to young
              families
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
