import React from "react";
import Categorie from "./Categorie";
import { useFetch } from "../../ConstructorFetch";


export default function ListCategories() {
  const url = "categorias";
  const { data } = useFetch(url);

  return (
    <section>
      <h2>Tipos de recetas</h2>
      {data && (
        <div>
          {data.map((categorie) => (
            <Categorie
              key={categorie.id}
              id={categorie.id}
              tittle={categorie.nombre}
            />
          ))}
        </div>
      )}
    </section>
  );
}
