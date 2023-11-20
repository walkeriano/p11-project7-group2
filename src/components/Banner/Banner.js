import logotipo from '../../assets/img/logotipo.svg';
import facebook from '../../assets/img/facebook.svg';
import tiktok from '../../assets/img/tiktok.svg';
import instagram from '../../assets/img/instagram.svg';
import banner from '../../assets/img/banner.jpg';
import './Banner.css';

export default function Logotipo() {
  return (
    <div>
      <div className='bodyheader'>
        <div className='info'>
          <img className='logotipo' src={logotipo} alt="Chef yourself" />
          <p className='slogan'>Explora, comparte<span> y disfruta</span></p>
          <div className='socialNetworks'>
            <button className='button'>Iniciar Sesión</button>
            <aside>
              <img className='socialApp' src={facebook} alt="Logotipo Facebook" />
              <img className='socialApp' src={tiktok} alt="Logotipo Tik Tok" />
              <img className='socialApp' src={instagram} alt="Logotipo Instagram" />
            </aside>
          </div>
        </div>
        <img className='imagen' src={banner} alt="" />
        <div className='degradado'></div>
      </div>
    </div>

  )
}



