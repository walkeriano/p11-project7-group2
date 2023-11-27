import saltbae from "../../assets/img/saltbae.png"
import './UserCard.css'
import gorrito from "../../assets/img/gorrito.svg";
import añadir from "../../assets/img/añadir.svg";


export default function UserCard({ togglePerfil, verMisRecetas }) {

  const buttonRecipe = verMisRecetas ? "boton-perfil-naranja" : "boton-perfil-gris";
  const buttonAddForm = verMisRecetas ? "boton-perfil-gris" : "boton-perfil-naranja";


  return (
    <section className="cont-usercard">
      <div className="rectanguloblanco">
        <div className="info-perfil-page">
          <div className="datos-perfil-page">
            <h4>Hey, Jorge Lara!</h4>
            <p>jorge.lara.la@gmail.com</p>
          </div>
          <img className="img-perfil-page" src={saltbae} />
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
  )
}

