// src/components/Hero.jsx
export default function Hero({ title, description, bgImage }) {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section style={style} className="w-100">
      <div className="py-5" style={{ background: "rgba(0,0,0,.55)" }}>
        <div className="container text-white">
          <h1 className="display-5 fw-bold">{title}</h1>
          {description && <p className="lead mb-0">{description}</p>}
        </div>
      </div>
    </section>
  );
}
