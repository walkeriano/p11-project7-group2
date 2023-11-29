import React, { useState, useEffect } from 'react';
import './ContinentCarrusel.css';
import { Link } from 'react-router-dom';


const ContinentCarrusel = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [continentes, setContinentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:5000/continentes";

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red - Código: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setContinentes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error", error.message);
        setLoading(false);
      });
  }, []); 

  const moverCarrusel = (direccion) => {
    const nuevoIndice = (indiceActual + direccion + continentes.length) % continentes.length;
    setIndiceActual(nuevoIndice);
  };

  return (
    <div className="carrusel-container">
      {loading && <p>Cargando...</p>}
      {!loading && (
        <div className="carrusel-wrapper">
          {continentes.map((continente, index) => (
            <Link key={continente.id} to={`/continentes`} className={`continentes ${index === indiceActual ? 'activa' : ''}`}>
              <img className='imagen-carrusel' src={continente.imagen} alt={continente.nombre} />
              <h2>{continente.nombre}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContinentCarrusel;
