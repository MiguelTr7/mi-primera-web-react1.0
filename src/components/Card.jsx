// src/components/Card.jsx
export default function Card({
  icon = "📦",
  title,
  description,
  color = "#0d6efd",
  children,
}) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="display-6" style={{ color }}>
          {icon}
        </div>
        <h5 className="card-title mt-2">{title}</h5>
        {description && <p className="card-text text-muted">{description}</p>}
        {children}
      </div>
    </div>
  );
}
