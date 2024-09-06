import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useState } from "react";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import "./NavBar.css";
import { Link } from "./types";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const last = window.location.pathname.split("/").pop();
    setActiveLink("/" + last);
  }, []);

  const links: Link[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Menu",
      url: "/menu",
    },
    {
      title: "Booking",
      url: "/booking",
    },
    {
      title: "About us",
      url: "/about",
    },
    {
      title: "Contact us",
      url: "/contact",
    },
  ];

  const menuProps = {
    links,
    activeLink,
  };

  return (
    <nav>
      <section id="logo">
        <a href="/">
          <img
            alt="little lemon logo, logo of a lemon"
            width={200}
            src="/little-lemon-icons/Logo.svg"
          />
        </a>
      </section>
      <MobileMenu key="mobile-menu" {...menuProps} />
      <DesktopMenu key="desktop-menu" {...menuProps} />
    </nav>
  );
}
