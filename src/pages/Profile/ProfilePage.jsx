import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import UserCard from "../../components/UserCard/UserCard";
import "./ProfilePage.css";
import iconstexture from "../../assets/img/icons-texture.png";
import UserAdvice from "../../components/UserAdvice/UserAdvice";

export default function ProfilePage() {
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
      <UserAdvice />
    </section>
  );
}
