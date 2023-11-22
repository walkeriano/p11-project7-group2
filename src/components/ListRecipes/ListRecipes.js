import React from "react";
import Recipe from "./Recipe";
import { useFetch } from "../../ConstructorFetch";

import './ListRecipes.css'

export default function ListRecipes() {
  const url = "recetas";
  const { data } = useFetch(url);
  

  return (
    <div>
      <h3 className="subTitle">Recetas Disponibles</h3>
      {data && (
        <div>
          {data.map((receta) => (
            <div className="listCard">
            <Recipe
              key={receta.id}
              id={receta.id}
              tittle={receta.nombre}
              src={receta.imagen}
              categoria={receta.categoria}
            />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
