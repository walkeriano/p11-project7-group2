import "./UserCard.css";
import gorrito from "../../assets/img/gorrito.svg";
import añadir from "../../assets/img/añadir.svg";
import { useNavigate } from "react-router-dom";

export default function UserCard({ togglePerfil, verMisRecetas }) {
  const buttonRecipe = verMisRecetas
    ? "boton-perfil-naranja"
    : "boton-perfil-gris";
  const buttonAddForm = verMisRecetas
    ? "boton-perfil-gris"
    : "boton-perfil-naranja";
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <section className="cont-usercard">
      <div className="rectanguloblanco">
        <div className="info-perfil-page">
          <div className="datos-perfil-page">
            <h4>Hey, {user?.name}!</h4>
            <p>{user?.email}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
          <img className="img-perfil-page" src={user?.profile} />
        </div>
        <div className="botones-perfil-page">
          <button className={buttonRecipe} onClick={() => togglePerfil(true)}>
            <img src={gorrito} alt="img gorrito" />
            Crear receta
          </button>
          <button className={buttonAddForm} onClick={() => togglePerfil(false)}>
            Mis Recetas
            <img src={añadir} alt="img añadir" />
          </button>
        </div>
      </div>
    </section>
  );
}
