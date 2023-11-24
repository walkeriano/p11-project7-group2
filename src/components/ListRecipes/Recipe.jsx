import { Link } from "react-router-dom";
import "./Recipe.css";

export default function Recipe({ id, src, tittle, categoria, userData }) {
  const { name, profile } = userData && userData.length > 0 ? userData[0] : {};

  return (
    <Link className="card" to={`/detalles-recetas/${id}`}>
      <div className="card-info">
        <p className="tittle-card">{tittle}</p>
        <section className="info-extra">
          <div className="card-info-user">
            {profile && <img className="card-perfil-user" src={profile} alt={`img-${name}`} />}
            <p>{name}</p>
          </div>
          <p className="cat-card">{categoria}</p>
        </section>
      </div>
      <img className="bg-recipe-card" src={src} alt="img-receta" />
    </Link>
  );
}
