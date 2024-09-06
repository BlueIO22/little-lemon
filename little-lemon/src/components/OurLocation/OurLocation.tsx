export default function OurLocation() {
  return (
    <section id="map">
      <h2>You can find us here!</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33646.08995379535!2d-87.77060608294953!3d41.808434315476504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20Illinois%2C%20USA!5e0!3m2!1sno!2sse!4v1725627159861!5m2!1sno!2sse"
        width="600"
        height="450"
        style={{
          border: "0px",
        }}
        loading="lazy"
      ></iframe>
    </section>
  );
}
