import add from "../../assets/img/add.svg";
import profile from "../../assets/img/profile.svg";
import search from "../../assets/img/search.svg";
import home from "../../assets/img/home.svg";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <section className="cont-menu">
      <div className="menu">
        <Link to="/" className="link-menu" >
          <img src={home} alt="Botón de home" />
        </Link>
        <Link to="/"  className="link-menu" >
          <img src={profile} alt="Botón de profile" />
        </Link>
        <Link to="/"  className="link-menu" >
          <img src={add} alt="Botón de Add" />
        </Link>
        <Link to="/"  className="link-menu" >
          <img src={search} alt="Botón de Search" />
        </Link>
      </div>
    </section>
  );
}
