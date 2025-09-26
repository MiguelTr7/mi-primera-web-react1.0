// src/components/Button.jsx
import { Link } from "react-router-dom";

export default function Button({
  to = "#",
  text = "Ver más",
  size = "md",
  variant = "primary",
}) {
  const sizes = { sm: "btn-sm", md: "", lg: "btn-lg" };
  return (
    <Link className={`btn btn-${variant} ${sizes[size]}`} to={to}>
      {text}
    </Link>
  );
}
