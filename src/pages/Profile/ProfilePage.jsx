import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import "./ProfilePage.css";
import iconstexture from "../../assets/img/icons-texture.png";
import AddRecipeForm from "../../components/FormAddRecipe/AddRecipeForm";
import UserCard from "../../components/UserCard/UserCard";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Carrusel from "../../components/ContinentCarrusel/ContinentCarrusel";


export default function ProfilePage() {
  const [verMisRecetas, setVerMisRecetas] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const togglePerfil = (newState) => {
    setVerMisRecetas(newState);
  };

  useEffect(() => {
    if (user?.name != null || undefined) {
    } else {
      navigate("/acces-sesion");
    }
  }, []);
  
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
      {verMisRecetas ? <AddRecipeForm /> : <div>miau</div>}
      <Footer />
    </section>
  );
}
