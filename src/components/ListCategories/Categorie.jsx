import { Link } from "react-router-dom";

export default function Categorie({ id, tittle }) {
  return (
    <Link to={`/tipo-receta/${id}`}>
      <p>{tittle}</p>
      
    </Link>
  );
}