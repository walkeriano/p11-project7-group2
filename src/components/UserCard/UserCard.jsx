import "./UserCard.css"
import saltbae from '../../assets/img/saltbae.png';
import gorrito from '../../assets/img/gorrito.svg';
import añadir from '../../assets/img/añadir.svg';


export default function UserCard() {
    return (

        <section className="cont-usercard">
            <div class="rectangulo-naranja-aviso" >
            </div>
            <div className='rectanguloblanco'>
                <div className='info-perfil-page'>
                    <div className='datos-perfil-page'>
                        <h4>Jorge Lara</h4>
                        <p>jorge.lara.la@gmail.com</p>
                    </div>
                    <img className='img-perfil-page' src={saltbae} />
                </div>
                <div className='botones-perfil-page'>
                    <button className='boton-perfil-naranja'>
                        <img src={gorrito} alt="img gorrito" />
                        Crear receta
                    </button>
                    <button className='boton-perfil-gris'>
                        Mis Recetas
                        <img src={añadir} alt="img añadir" />
                    </button>
                </div>
            </div>
        </section>


    );
}

