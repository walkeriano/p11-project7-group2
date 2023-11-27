import logotipo from '../../assets/img/logotipo.svg';
import facebookFooter from '../../assets/img/facebookFooter.svg';
import tiktokFooter from '../../assets/img/tiktokFooter.svg';
import instagramFooter from '../../assets/img/instagramFooter.svg';

import './Footer.css'

export default function Footer() {
  return (
    <section className='backgroundFooter' >
        <div className='footerPage'>
          <div className='fila1'>
          <img className='logotipoFooter' src={logotipo} alt="Chef yourself" />
          <aside>
              <img className='socialAppFooter' src={facebookFooter} alt="Logotipo Facebook" />
              <img className='socialAppFooter' src={tiktokFooter} alt="Logotipo Tik Tok" />
              <img className='socialAppFooter' src={instagramFooter} alt="Logotipo Instagram" />
          </aside>
          </div>
          <div className='infoLocal'>
                <p className='infoFooter'><span>Horario:</span> Abierto todos los días de 11h a 23:30h</p>
                <p className='infoFooter'><span>Direción:</span> Av. del Bogatell, 82, 08005 Barcelona, España</p>            
                <p className='infoFooter'><span>Teléfono:</span> +34 666 66 66 66</p>
                <p className='infoFooter'><span>Email:</span> info@chefyourself.com</p>
          </div>
          <p className='copyright'>Copyright © 2023 FactoriaF5</p>
        </div>
    </section>
  );
}