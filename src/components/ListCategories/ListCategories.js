import React from "react";
import "./ListCategories.css";
import { Link } from "react-router-dom";
import catOne from "../../assets/img/cat-one.png";
import catTwo from "../../assets/img/cat-two.png";
import catTre from "../../assets/img/cat-tre.png";
import catFor from "../../assets/img/cat-for.png";

export default function ListCategories() {
  return (
    <section className="cont-list-categories">
      <h2 className="title">¿Qué cocinaremos hoy?</h2>
      <div className="cont-cats">
        <Link className="sectionType" to="/">
          <img
            className="imgType"
            src={catOne}
            alt="Portada de los entrantes"
          />
          <button className="btn-entrantes" >Entrantes</button>
        </Link>
        <Link className="sectionType" to="/">
          <img className="imgType-two" src={catTwo} alt="Portada de los platos" />
          <button className="btn-platos">Platos</button>
        </Link>
        <Link className="sectionType" to="/">
          <img className="imgType" src={catTre} alt="Portada de los postres" />
          <button className="btn-postres">Postres</button>
        </Link>
        <Link className="sectionType" to="/">
          <img className="imgType" src={catFor} alt="Portada de las bebidas" />
          <button className="btn-bebidas">Bebidas</button>
        </Link>
      </div>
    </section>
  );
}
