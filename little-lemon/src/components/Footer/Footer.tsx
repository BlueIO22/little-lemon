import OpeningHours from "../OpeningHours";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img src="/logo-footer.png" />
      <article id="follow-us">
        <h3>Follow us on</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </article>
      <article id="opening-hours-footer">
        <h3>Opening Hours</h3>
        <OpeningHours />
      </article>
      <article id="copyright">
        <p>© Copyright Little Lemon</p>
      </article>
    </footer>
  );
}
