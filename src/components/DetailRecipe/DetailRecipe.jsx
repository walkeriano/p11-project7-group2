import "./DetailRecipe.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../ConstructorFetch";
import texture from "../../assets/img/icons-texture.png";

export default function DetailRecipe() {
  const { id } = useParams();

  const url = `recetas/${id}`;
  const { data } = useFetch(url);

  if (!data) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="cont-info-general">
      <div className="cont-detail-recipe">
        <section className="cont-img-receta">
          <img src={data?.imagen} alt="imagen-receta" />
        </section>
        <section className="cont-info-receta">
          <p className="cat-rec">{data?.categoria}</p>
          <h3 className="title-rec">{data?.nombre}</h3>
          <p className="des-rec">{data?.descripcion}</p>
          <div className="ingredients">
            <h4>Ingredientes:</h4>
            {data?.ingredientes.map((ingrediente, receta) => (
              <li key={receta}>{ingrediente}</li>
            ))}
          </div>
        </section>
      </div>
      <div className="cont-stadistics">
        <article>
          <h5>{data?.dificultad}</h5>
          <p>Dificultad</p>
        </article>
        <article>
          <div className="info-porciones">
            <span>+</span>
            <h5>{data?.porciones}</h5>
          </div>
          <p>Porciones</p>
        </article>
        <article>
          <div className="info-tiempo">
            <h5>{data?.tiempo}</h5>
            <span>{data?.duracion}</span>
          </div>
          <p>Tiempo</p>
        </article>
      </div>
      <div className="cont-preparation">
        <span className="degrad"></span>
        <div className="info-preparation">
          <div className="cont-info-preparation">
            <h4>Preparación</h4>
            {Array.isArray(data?.instrucciones) ? (
              <ul>
                {data.instrucciones.map((instruccion, index) => (
                  <li key={index}>{instruccion}</li>
                ))}
              </ul>
            ) : (
              <li>{data?.instrucciones}</li>
            )}
          </div>
          <img src={data?.imagenPreparacion} alt="receta-imagen" />
        </div>
        <span className="degrad-two"></span>
        <img src={texture} className="bg-texture" alt="" />
      </div>
    </section>
  );
}
