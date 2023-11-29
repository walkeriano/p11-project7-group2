import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import "./ProfilePage.css";
import iconstexture from "../../assets/img/icons-texture.png";
import AddRecipeForm from "../../components/FormAddRecipe/AddRecipeForm";
import UserCard from "../../components/UserCard/UserCard";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useFetch } from "../../ConstructorFetch";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [verMisRecetas, setVerMisRecetas] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [recetasDelUsuario, setRecetasDelUsuario] = useState([]);

  const url = "recetas";
  const { data, hasError } = useFetch(url);

  const navigate = useNavigate();

  const togglePerfil = (newState) => {
    setVerMisRecetas(newState);
  };

  useEffect(() => {
    const userName = user?.name;
    if (!userName) {
      navigate("/acces-sesion");
      return;
    }
    if (hasError) {
      console.error("Error al obtener las recetas:", hasError);
      return;
    }
    const recetasDelUsuarioFiltradas = data?.filter(
      (receta) => receta.userData && receta.userData[0]?.name === userName
    );
    setRecetasDelUsuario(recetasDelUsuarioFiltradas);
  }, [user, data, navigate, hasError]);

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
      {verMisRecetas ? (
        <AddRecipeForm />
      ) : (
        <div className="card-recipe">
          {recetasDelUsuario?.map((receta) => (
            <Link className="card" key={receta.id} to={`/detalles-recetas/${receta.id}`}>
              <div className="card-info">
                <p className="tittle-card">{receta.nombre}</p>
                <section className="info-extra">
                  <div className="card-info-user">
                    <img className="card-perfil-user" src={receta.userData[0]?.profile} alt={`img-${receta.userData[0]?.name}`} />
                    <p>{receta.userData[0]?.name}</p>
                  </div>
                  <p className="cat-card">{receta.categoria}</p>
                </section>
              </div>
              <img
                className="bg-recipe-card"
                src={receta.imagen}
                alt="img-receta"
              />
            </Link>
          ))}
        </div>
      )}
      <Footer />
    </section>
  );
}
