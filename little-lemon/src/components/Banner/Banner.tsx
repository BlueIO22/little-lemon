import "./Banner.css";

export default function Banner({
  imageUrl,
  imageAlt,
  title,
}: {
  imageUrl: string;
  imageAlt: string;
  title: string;
}) {
  return (
    <section className="banner">
      <img src={imageUrl} alt={imageAlt} />
      <article>
        <h1>{title}</h1>
      </article>
    </section>
  );
}
