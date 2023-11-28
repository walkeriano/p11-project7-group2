import "./UserCard.css";
import saltbae from "../../assets/img/saltbae.png";
import gorrito from "../../assets/img/gorrito.svg";
import añadir from "../../assets/img/añadir.svg";

export default function UserCard() {

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <section className="cont-usercard">
      <div className="rectanguloblanco">
        <div className="info-perfil-page">
          <div className="datos-perfil-page">
            <h4>Hey, {user?.name}!</h4>
            <p>{user?.email}</p>
          </div>
          <img className="img-perfil-page" src={user?.profile} />
        </div>
        <div className="botones-perfil-page">
          <button className="boton-perfil-naranja">
            <img src={gorrito} alt="img gorrito" />
            Crear receta
          </button>
          <button className="boton-perfil-gris">
            Mis Recetas
            <img src={añadir} alt="img añadir" />
          </button>
        </div>
      </div>
    </section>
  );
}
