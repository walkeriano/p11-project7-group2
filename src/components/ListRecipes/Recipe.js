import { Link } from "react-router-dom";

import './Recipe.css'

export default function Recipe({ id, src, tittle, categoria }) {
  return (
    <Link className="link" to={`/receta/${id}`}>
      <div className="bodyCard">
        <div className="cardRecipe">
          <p>{tittle}</p>
          <p>{categoria}</p>
        </div>
        <img className="imgDishes" src={src} alt="img-receta" />
      </div>
    </Link>
  );
}
