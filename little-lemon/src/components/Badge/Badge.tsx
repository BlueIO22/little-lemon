import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Badge.css";

export default function Badge({
  title,
  selected,
  onBadgeClick,
}: {
  title: string;
  selected?: boolean;
  onBadgeClick?: (option: string) => void;
}) {
  return (
    <article
      id="badge"
      style={{
        backgroundColor: selected ? "var(--primary-color)" : "",
        color: selected ? "white" : "",
      }}
      onClick={() => {
        if (!onBadgeClick) {
          return;
        }
        onBadgeClick(title);
      }}
    >
      <p>
        {selected && <FontAwesomeIcon icon={faCheck} />} {title}
      </p>
    </article>
  );
}
