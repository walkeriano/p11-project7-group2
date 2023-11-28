import React from "react";
import { useState, useEffect } from "react";
import "./ListCategories.css";
import catOne from "../../assets/img/cat-one.png";
import catTwo from "../../assets/img/cat-two.png";
import catTre from "../../assets/img/cat-tre.png";
import catFor from "../../assets/img/cat-for.png";

export default function ListCategories({ onCategoryClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category); // Llamar a la función proporcionada por Home
  };

  return (
    <section className="cont-list-categories">
      <h2 className="title">¿Qué cocinaremos hoy?</h2>
      <div className="cont-cats">
        <button
          className={`sectionType ${
            selectedCategory === "Entrantes" ? "selected-entrantes" : ""
          }`}
          onClick={() => handleCategoryClick("Entrantes")}
        >
          <img
            className="imgType"
            src={catOne}
            alt="Portada de los entrantes"
          />
          <p className="btn-entrantes">Entrantes</p>
        </button>
        <button
          className={`sectionType ${
            selectedCategory === "Platos" ? "selected-platos" : ""
          }`}
          onClick={() => handleCategoryClick("Platos")}
        >
          <img
            className="imgType-two"
            src={catTwo}
            alt="Portada de los platos"
          />
          <p className="btn-platos">Platos</p>
        </button>
        <button
          className={`sectionType ${
            selectedCategory === "Postres" ? "selected-postres" : ""
          }`}
          onClick={() => handleCategoryClick("Postres")}
        >
          <img className="imgType" src={catTre} alt="Portada de los postres" />
          <p className="btn-postres">Postres</p>
        </button>
        <button
          className={`sectionType ${
            selectedCategory === "Bebidas" ? "selected-bebidas" : ""
          }`}
          onClick={() => handleCategoryClick("Bebidas")}
        >
          <img className="imgType" src={catFor} alt="Portada de las bebidas" />
          <p className="btn-bebidas">Bebidas</p>
        </button>
      </div>
    </section>
  );
}
