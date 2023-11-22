import "./HeaderLogin.css"
import logotipo from '../../assets/img/logotipo.svg';
import fotoperfil from '../../assets/img/fotoperfil.png';

export default function HeaderLogin() {
  return (
    <section className="cont-header">
      <img src={logotipo} alt="logo-chef-yourself" className="logo-header" />
      <div className="user-content">
        <div><img src={fotoperfil} className='img-user' alt="fotoperfil" /></div>
        <p>Jorge Lara</p>
      </div>
    </section>
  );
}
