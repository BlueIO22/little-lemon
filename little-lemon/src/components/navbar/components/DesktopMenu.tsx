import { Link } from "../types";

export default function DesktopMenu({
  links,
  activeLink,
}: {
  links: Link[];
  activeLink: string;
}) {
  return (
    <section id="desktop-menu">
      <ul>
        {links.map((link: Link) => {
          return (
            <li>
              <a
                data-active={activeLink === link.url}
                key={link.url}
                href={link.url}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
