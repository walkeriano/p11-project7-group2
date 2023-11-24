import "./UserAdvice.css";

export default function UserAdvice() {
  return (
    <section className="cont-useradvice">
      <div className="cont-advice">
        <h5>En hora buena!</h5>
        <p>
          Gracias por compartir tus recetas y hacer más grande esta comunidad!
        </p>
      </div>
      <button className="btn-terminar">Terminar</button>
      <div className="ms-finaladvice">
        <p className="ms1">Explora, comparte</p>
        <p className="ms2">y disfruta</p>
      </div>
    </section>
  );
}
