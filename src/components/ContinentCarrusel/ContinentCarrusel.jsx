import React, { useState, useEffect, useRef } from "react";
import "./ContinentCarrusel.css";
import { Link } from "react-router-dom";
import iconArrow from "../../assets/img/icon-arrow-slider.svg";



const ContinentCarrusel = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [continentes, setContinentes] = useState([]);
  const [loading, setLoading] = useState(true);
  let sliderContainer = useRef(null);

  useEffect(() => {
    const url = "http://localhost:5000/continentes";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error de red - Código: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setContinentes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error", error.message);
        setLoading(false);
      });
  }, []);

  const left = () => {
    if (sliderContainer.current) {
      sliderContainer.current.scrollLeft -= 400;
    }
  };
  const right = () => {
    if (sliderContainer.current) {
      sliderContainer.current.scrollLeft += 400;
    }
  };

  return (
    <div className="cont-carrusel">
      <p className="cont-title-carrusel">Recetas del mundo</p>
      <section className="carrusel-container" ref={sliderContainer}>
        {loading && <p>Cargando...</p>}
        {!loading && (
          <div className="carrusel-wrapper">
            {continentes.map((continente, index) => (
              <Link
                key={continente.id}
                to={`/continentes`}
                className={`continentes ${
                  index === indiceActual ? "activa" : ""
                }`}
              >
                <img
                  className="imagen-carrusel"
                  src={continente.imagen}
                  alt={continente.nombre}
                />
                <h4>
                  <span>{continente.nombre}</span>
                </h4>
              </Link>
            ))}
          </div>
        )}
      </section>
      <div className="btns">
        <button className="arrowButton1" onClick={left}>
          <img src={iconArrow} alt="icon-arrow" />
        </button>
        <button className="arrowButton2" onClick={right}>
          <img src={iconArrow} alt="icon-arrow" />
        </button>
      </div>
    </div>
  );
};

export default ContinentCarrusel;
