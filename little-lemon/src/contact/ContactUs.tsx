import ContactForm from "../components/ContactForm/ContactForm";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contact-us">
      <section id="contact-us-banner">
        <article>
          <h1>Contact us</h1>
          <p>Please feel free to contact us</p>
        </article>
      </section>
      <section id="contact-form-container">
        <ContactForm />
      </section>
    </section>
  );
}
