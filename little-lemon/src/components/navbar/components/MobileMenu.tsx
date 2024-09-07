import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "../types";

export default function MobileMenu({
  links,
  activeLink,
}: {
  links: Link[];
  activeLink: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section id="mobile-menu">
      <FontAwesomeIcon
        onClick={() => {
          setOpen(!open);
        }}
        size="3x"
        icon={faBars}
      />
      {open && (
        <section id="mobile-menu-content">
          <ul>
            {links.map((link: Link) => {
              return (
                <li key={link.url}>
                  <a data-active={activeLink === link.url} href={link.url}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <FontAwesomeIcon
            id="closeIcon"
            onClick={() => {
              setOpen(!open);
            }}
            size="3x"
            icon={faClose}
            color="white"
          />
        </section>
      )}
    </section>
  );
}
