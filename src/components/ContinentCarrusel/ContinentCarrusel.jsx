import React, { useState, useEffect, useRef } from 'react';
import './ContinentCarrusel.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ContinentCarrusel = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [continentes, setContinentes] = useState([]);
  const [loading, setLoading] = useState(true);
  let sliderContainer = useRef(null);

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

  const left = () => {
    if (sliderContainer.current) {
      sliderContainer.current.scrollLeft -= 500;
    }
  };
  const right = () => {
    if (sliderContainer.current) {
      sliderContainer.current.scrollLeft += 500;
    }
  };


  return (
    <div className='cont-carrusel' >

      <section className="carrusel-container" ref={sliderContainer}>
        {loading && <p>Cargando...</p>}
        {!loading && (
          <div className="carrusel-wrapper">
            {continentes.map((continente, index) => (
              <Link key={continente.id} to={`/continentes`} className={`continentes ${index === indiceActual ? 'activa' : ''}`}>
                <img className='imagen-carrusel' src={continente.imagen} alt={continente.nombre} />
                <h2><span>{continente.nombre}</span></h2>
              </Link>
            ))}

          </div>
        )}
      </section>

      <div className='btns'>
        <button className='arrowButton1' onClick={left}>{'<'}</button>
        <button className='arrowButton2' onClick={right}>{'>'}</button>
      </div>

    </div>
  );
};

export default ContinentCarrusel;
