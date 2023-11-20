import "./HeaderLogin.css"
import logotipo from '../../assets/img/logotipo.svg';

export default function HeaderLogin() {
  return (
    <section className="cont-header">
      <img src={logotipo} alt="logo-chef-yourself" className="logo-header" />
      <div className="user-content">
        <div className="img-user"></div>
        <p>Jorge Lara</p>
      </div>
    </section>
  );
}
