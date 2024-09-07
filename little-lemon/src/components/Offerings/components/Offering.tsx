import { useState } from "react";

export default function Offering({
  id,
  imageUrl,
  imageAlt,
  title,
  description,
  url,
  buttonText,
  hideButton,
}: {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string | JSX.Element;
  url?: string;
  buttonText?: string;
  hideButton?: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <article id={id}>
      <img
        src={imageUrl}
        onLoad={() => {
          setImageLoaded(true);
        }}
        alt={imageAlt}
      />
      {imageLoaded && (
        <section id="content">
          <h3>{title}</h3>
          {description}
          {!hideButton && (
            <a href={url} className="primary-button">
              {buttonText}
            </a>
          )}
        </section>
      )}
    </article>
  );
}
