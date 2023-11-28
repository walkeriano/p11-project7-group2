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
  const [searchView, setSearchView] = useState(false);

  return (
    <>
      {searchView ? (
        <div className="section-search">
          <section className="cont-info-search">
            <img className="icon-cheff" src={iCheff} alt="icon-cheff" />
            <label htmlFor="search" className="cont-label">
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Ingresa tu busqueda"
              />
              <button>
                <img src={searchIcon} alt="icon-search" />
              </button>
            </label>
            <p className="result-title">Resultados:</p>
          </section>
          <section className="cont-slide-cards">
            <div className="cards-search">
              <img src={profile} alt="" />
              <div className="cont-info-card-search">
                <h4>Spaghetiis a la huancanica</h4>
                <p>Entrantes</p>
              </div>
            </div>
          </section>
          <button
            className="close-btn-menu"
            onClick={() => setSearchView(false)}
          >
            x
          </button>
        </div>
      ) : (
        <div className="menu">
          <Link to="/" className="link-menu">
            <img src={home} alt="Botón de home" />
          </Link>
          <button onClick={() => setSearchView(true)} className="link-menu">
            <img src={search} alt="Botón de Search" />
          </button>
          {user?.name != null || undefined ? (
            <Link to="/profile-page" className="link-menu">
              <img src={user?.profile} alt="Botón de profile" />
              <p>{user?.name}</p>
            </Link>
          ) : (
            <Link to="/acces-sesion" className="link-menu">
              <img src={profile} alt="Botón de profile" />
            </Link>
          )}
        </div>
      )}
    </>
  );
}
