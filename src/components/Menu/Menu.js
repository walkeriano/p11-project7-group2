import profile from "../../assets/img/profile.svg";
import search from "../../assets/img/search.svg";
import home from "../../assets/img/home.svg";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="link-menu">
        <img src={home} alt="Botón de home" />
      </Link>
      <Link to="/" className="link-menu">
        <img src={search} alt="Botón de Search" />
      </Link>
      <Link to="/" className="link-menu">
        <img src={profile} alt="Botón de profile" />
      </Link>
    </div>
  );
}
