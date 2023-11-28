import React from "react";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import { useFetch } from "../../ConstructorFetch";
import "./ListRecipes.css";
import arrow from "../../assets/img/icon-results.svg"

export default function ListRecipes({ selectedCategory }) {
  const url = selectedCategory
    ? `recetas?categoria=${selectedCategory}`
    : "recetas";
  const { data } = useFetch(url);
  const [recipeCount, setRecipeCount] = useState(0);

  useEffect(() => {
    // Actualiza la cantidad de recetas cuando cambia la categoría o se obtienen nuevos datos
    setRecipeCount(data ? data.length : 0);
  }, [selectedCategory, data]);

  return (
    <div className="cont-recipes">
      <div className="recipe-count">
        <h3 className="sub-title">
          {selectedCategory
            ? `Recetas de ${selectedCategory}`
            : "Recetas Recomendadas"}
        </h3>
        <div className="cont-info-results">
          <p>{`Disponibles: ${recipeCount}`}</p>
          <img src={arrow} alt="results-icon" />
        </div>
        
      </div>
      {data && (
        <div className="card-recipe">
          {data.map((receta) => (
            <Recipe
              key={receta.id}
              id={receta.id}
              tittle={receta.nombre}
              src={receta.imagen}
              categoria={receta.categoria}
              userData={receta.userData}
            />
          ))}
        </div>
      )}
    </div>
  );
}
