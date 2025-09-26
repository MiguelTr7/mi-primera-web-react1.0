// src/pages/Servicios.jsx
import Hero from "../components/Hero";
import Card from "../components/Card";
import Button from "../components/Button";

const servicios = [
  {
    icon: "🛠️",
    title: "Mantenimiento Web",
    description: "Actualizaciones y parches continuos.",
    color: "#0d6efd",
  },
  {
    icon: "⚡",
    title: "Optimización",
    description: "Mejor rendimiento y SEO.",
    color: "#198754",
  },
  {
    icon: "🎨",
    title: "UI/UX",
    description: "Interfaces limpias y accesibles.",
    color: "#fd7e14",
  },
  {
    icon: "🔒",
    title: "Seguridad",
    description: "Buenas prácticas y hardening.",
    color: "#dc3545",
  },
  {
    icon: "☁️",
    title: "Deploy",
    description: "Automatizaciones y hosting.",
    color: "#6f42c1",
  },
  {
    icon: "🔌",
    title: "Integraciones",
    description: "APIs y servicios externos.",
    color: "#20c997",
  },
];

export default function Servicios() {
  return (
    <>
      <Hero
        title="Nuestros Servicios"
        description="Soluciones frontend modernas, rápidas y accesibles."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      />
      <div className="container my-5">
        <div className="row g-4">
          {servicios.map((s, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <Card
                icon={s.icon}
                title={s.title}
                description={s.description}
                color={s.color}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button
            to="/contacto"
            text="Pedir una demo"
            size="lg"
            variant="primary"
          />
        </div>
      </div>
    </>
  );
}
