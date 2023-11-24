import fotoportada from '../../assets/img/fotoportada.png';
import fotoperfil from '../../assets/img/fotoperfil.png';
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import recetaimg from '../../assets/img/recetaimg.png';
import AddRecipeForm from '../../components/FormAddRecipe/AddRecipeForm';

import './ProfilePage.css';

export default function ProfilePage() {
  return (

    <section className='profilepage'>
      <HeaderLogin />
      <div className='fotoportada'>
        <img src={fotoportada} className='portada' alt="fotoportada" />
        <img src={fotoperfil} className='foto' alt="fotoperfil" />
      </div>
      <div>
        <p className='username'>Jorge Lara</p>
        <div>
          <u className='email'>jorge.lara.la@gmail.com</u>
        </div>
      </div>
      <div><p className='misrecetas'>Mis Recetas</p>
      </div>
      <div className='recetaimg'>
      <img src={recetaimg}  alt="fotoreceta" />
      <img src={recetaimg}  alt="fotoreceta" />
      <img src={recetaimg}  alt="fotoreceta" />
      </div>
      <AddRecipeForm />


    </section>
  );
}