import { Link } from "react-router-dom";

export default function Recipe({ id, src, tittle }) {
  return (
    <Link to={`/receta/${id}`}>
      <p>{tittle}</p>
      <img src={src} alt="img-receta" />
    </Link>
  );
}
