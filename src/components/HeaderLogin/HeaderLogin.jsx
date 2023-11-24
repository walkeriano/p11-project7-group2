import "./HeaderLogin.css"
import logotipo from '../../assets/img/logotipo.svg';
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function HeaderLogin() {
  return (
    <section className="cont-header-login">
      <Link className="cont-logo-header" to="/">
        <img src={logotipo} alt="logo-chef-yourself" className="logo-header" />
      </Link>
      
      <Menu />
    </section>
  );
}
