import React from "react";
import Recipe from "./Recipe";
import { useFetch } from "../../ConstructorFetch";

export default function ListRecipes() {
  const url = "recetas";
  const { data } = useFetch(url);
  

  return (
    <div>
      <h2>Datos obtenidos:</h2>
      {data && (
        <div>
          {data.map((receta) => (
            <Recipe
              key={receta.id}
              id={receta.id}
              tittle={receta.nombre}
              src={receta.imagen}
            />
          ))}
        </div>
      )}
    </div>
  );
}
