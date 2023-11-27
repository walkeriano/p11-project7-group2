import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import "./ProfilePage.css";
import iconstexture from "../../assets/img/icons-texture.png";
import AddRecipeForm from "../../components/FormAddRecipe/AddRecipeForm";
import UserCard from "../../components/UserCard/UserCard";
import { useState } from "react";


export default function ProfilePage() {
  const [verMisRecetas, setVerMisRecetas] = useState(true);


  const togglePerfil = (newState) => {
    setVerMisRecetas(newState);
  };

  return (
    <section className="profilepage">
      <HeaderLogin />
      <div className="profile-content">
        <UserCard togglePerfil={togglePerfil} verMisRecetas={verMisRecetas} />

        <div className="bg-profile-page">
          <span className="degrado-perfil-page"></span>
          <span className="degrado-perfil-page-bottom"></span>
          <img className="texturafondo" src={iconstexture} alt="texturafondo" />
        </div>
      </div>
      {verMisRecetas ? <div>miau</div> : <AddRecipeForm />}
    </section>
  );
}
