import React, { useState, useEffect } from "react";
import db from "../../db.json";

export default function ListRecipes() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("db.json"); // Cambia la URL si es necesario
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error("Error al realizar la solicitud fetch:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <h2>Datos obtenidos:</h2>
      <ul>
        {db.recetas.map((receta) => {
          return <li key={receta.id}>{receta.nombre}</li>;
        })}
      </ul>
    </div>
  );
}
