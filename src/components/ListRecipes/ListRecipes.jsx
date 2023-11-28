import React from "react";
import Recipe from "./Recipe";
import { useFetch } from "../../ConstructorFetch";
import "./ListRecipes.css";



export default function ListRecipes() {
  const url = "recetas";
  const { data } = useFetch(url);

  return (
    <div className="cont-recipes">
      <h3 className="sub-title">Recetas Disponibles</h3>
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

