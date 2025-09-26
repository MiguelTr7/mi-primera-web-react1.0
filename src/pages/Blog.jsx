// src/pages/Blog.jsx
import Hero from "../components/Hero";
import Card from "../components/Card";
import Button from "../components/Button";

const posts = [
  {
    title: "Guía de rendimiento en React",
    description: "Técnicas simples para apps más rápidas.",
  },
  {
    title: "Accesibilidad 101",
    description: "Buenas prácticas para todos los usuarios.",
  },
  {
    title: "Rutas con React Router",
    description: "Estructura de navegación limpia.",
  },
  { title: "Vite en producción", description: "Builds veloces y DX superior." },
];

export default function Blog() {
  return (
    <>
      <Hero
        title="Blog"
        description="Notas cortas sobre desarrollo frontend."
        bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      />
      <div className="container my-5">
        <div className="row g-4">
          {posts.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <Card
                title={p.title}
                description={p.description}
                icon="✍️"
                color="#0aa2c0"
              >
                <Button
                  to="#"
                  text="Leer más"
                  size="sm"
                  variant="outline-primary"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
