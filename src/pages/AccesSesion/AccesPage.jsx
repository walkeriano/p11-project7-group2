import "./AccesPage.css";
import Login from "../../components/Login/Login";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import { useState } from "react";
import iconpath from "../../assets/img/iconspath.png";
import logotipo from '../../assets/img/logotipoVerde.svg';
import goBack from "../../assets/img/goBack.svg"

export default function Acces() {
  const [sesion, setSesion] = useState(true);
  return (
    <section className="section-div">
      <a href="/"><img src={goBack} alt="Go back icon" /></a>
      <div className="background-image">
        <div className="small-green-div">
        </div>
      </div>
      <div className="iniciar-sesion">
        <img className="logo-login" src={logotipo} alt="Chef-Yourself Logo" />
        {sesion ? (
          <div className="cont-state">
            <div className="onclick-div">

              <div className="iniciar-sesion-btn-on">
                INICIAR SESIÓN
              </div>
              <div className="iniciar-sesion-btn-of" onClick={() => setSesion(false)}>
                CREAR CUENTA
              </div>

            </div>
            <Login />
          </div>
        ) : (
          <div className="cont-state">
            <div className="onclick-div">
            <div className="crear-cuenta-btn-of" onClick={() => setSesion(true)}>INICIAR SESIÓN</div>
            <div className="crear-cuenta-btn-on">CREAR CUENTA</div>
            </div>
            <CreateAccount />
          </div>
        )}
      </div>
      <img className="image-div" src={iconpath} alt="Pattern Image" />
    </section>
  );
}