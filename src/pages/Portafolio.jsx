// src/pages/Portafolio.jsx
import Hero from "../components/Hero";
import Card from "../components/Card";

const proyectos = [
  {
    title: "TechNova Store",
    description: "Tienda ficticia con carrito.",
    icon: "🛒",
    color: "#6f42c1",
  },
  {
    title: "FerreNova Landing",
    description: "Landing responsiva.",
    icon: "🏗️",
    color: "#0d6efd",
  },
  {
    title: "PuertoGames UI",
    description: "Catálogo con filtros.",
    icon: "🎮",
    color: "#dc3545",
  },
];

export default function Portafolio() {
  return (
    <>
      <Hero
        title="Portafolio"
        description="Algunos proyectos recientes."
        bgImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
      />
      <div className="container my-5">
        <div className="row g-4">
          {proyectos.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <Card
                title={p.title}
                description={p.description}
                icon={p.icon}
                color={p.color}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
