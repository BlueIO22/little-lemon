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
  return (
    <article id={id}>
      <img src={imageUrl} alt={imageAlt} />
      <section id="content">
        <h3>{title}</h3>
        <p>{description}</p>
        {!hideButton && (
          <a href={url} className="primary-button">
            {buttonText}
          </a>
        )}
      </section>
    </article>
  );
}
