import profile from "../../assets/img/profile.svg";
import search from "../../assets/img/search.svg";
import home from "../../assets/img/home.svg";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import iCheff from "../../assets/img/iconCY.svg";
import searchIcon from "../../assets/img/orangeSearch.svg";

export default function Menu() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [stateMenu, setStateMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchRecipes = async () => {
    if (searchValue.trim() === "") {
      console.log("Ingresa tu búsqueda aquí");
      setSearchResults([]);
      return;
    }
    try {
      const resp = await fetch(
        `http://localhost:5000/recetas?nombre_like=${searchValue}`
      );
      const data = await resp.json();
      setSearchResults(data || []);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  return (
    <>
      {stateMenu ? (
        <div className="section-search">
          <section className="cont-info-search">
            <img className="icon-cheff" src={iCheff} alt="icon-cheff" />
            <label htmlFor="search" className="cont-label">
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Escribe aquí..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  if (e.target.value.trim() === "") {
                    setSearchResults([]);
                  }
                }}
              />
              <button onClick={searchRecipes}>
                <img src={searchIcon} alt="icon-search" />
              </button>
            </label>
            <p className="result-title">Resultados:</p>
          </section>
          <section className="cont-slide-cards">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Link
                  to={`/detalles-recetas/${result.id}`}
                  className="cards-search"
                  key={result.id}
                >
                  <img src={result.imagen} alt="imagen-perfil-receta" />
                  <div className="cont-info-card-search">
                    <h4>{result.nombre}</h4>
                    <p>{result.categoria}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="message-search">
                <p>Encuentra las recetas que más te gusten</p>
              </div>
            )}
          </section>
          <button
            className="close-btn-menu"
            onClick={() => setStateMenu(false)}
          >
            x
          </button>
        </div>
      ) : (
        <section className="cont-menu">
          {user?.name != null || undefined ? (
            <div className="menu-user">
              <Link to="/" className="link-menu">
                <img src={home} alt="Botón de home" />
              </Link>
              <button onClick={() => setStateMenu(true)} className="link-menu">
                <img src={search} alt="Botón de Search" />
              </button>
              <Link to="/profile-page" className="perfil-menu-user">
                <img src={user?.profile} alt="Botón de profile" />
                <p>{user?.name}</p>
              </Link>
            </div>
          ) : (
            <div className="menu">
              <Link to="/" className="link-menu">
                <img src={home} alt="Botón de home" />
              </Link>
              <button onClick={() => setStateMenu(true)} className="link-menu">
                <img src={search} alt="Botón de Search" />
              </button>
              <Link to="/acces-sesion" className="link-menu">
                <img src={profile} alt="Botón de profile" />
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
}
