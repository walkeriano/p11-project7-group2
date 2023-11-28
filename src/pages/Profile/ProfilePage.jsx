import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import UserCard from "../../components/UserCard/UserCard";
import "./ProfilePage.css";
import iconstexture from "../../assets/img/icons-texture.png";
import AddRecipeForm from "../../components/FormAddRecipe/AddRecipeForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProfilePage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

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
        <UserCard />
        <div className="bg-profile-page">
          <span className="degrado-perfil-page"></span>
          <span className="degrado-perfil-page-bottom"></span>
          <img className="texturafondo" src={iconstexture} alt="texturafondo" />
        </div>
      </div>
      <AddRecipeForm />
    </section>
  );
}
