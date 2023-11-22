import React from "react";
import Categorie from "./Categorie";
import { useFetch } from "../../ConstructorFetch";

import './ListCategories.css'

export default function ListCategories() {
  const url = "categorias";
  const { data } = useFetch(url);

  return (
    <section>
      <h2 className='title'>¿Qué cocinaremos hoy?</h2>
      {data && (
        <div className="types">
            {data.map((categorie) => (
              <div className="sectionType">
              <Categorie
                key={categorie.id}
                id={categorie.id}
                tittle={categorie.nombre}
                img={categorie.imagen}
              />
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
