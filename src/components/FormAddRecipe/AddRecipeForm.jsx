import "./AddRecipeForm.css";
import recipePhoto from "../../assets/img/recipePhoto.png";
import AddAndRemoveIngredients from "../AddAndRemoveIngredients/AddAndRemoveIngredients";
import SetDifficulty from "../SetValorInputs/SetValorInputs";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddRecipeForm() {
  // campo de ingredientes
  const [elements, setElements] = useState([]);

  // campo de dificultad, tiempo, porciones
  const [inputValue, setInputValue] = useState(1);
  const [portionValue, setPortionValue] = useState(1);
  const [timeValue, setTimeValue] = useState("00:00");

  // otros campos
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [instrucciones, setInstrucciones] = useState("");

  const submitFormRecipe = async (e) => {
    e.preventDefault();
    let newRecipe = {
      id: null,
      nombre: nombre,
      descripcion: descripcion,
      categoria: categoria,
      dificultad: inputValue,
      tiempo: timeValue,
      porciones: portionValue,
      ingredientes: elements,
      instrucciones: instrucciones,
    };

    try {
      if (
        nombre === null ||
        descripcion === null ||
        elements === null ||
        instrucciones === null ||
        timeValue === null ||
        inputValue === null ||
        portionValue === null
      ) {
        Swal.fire({
          title: "Completar Todos los Campos",
          text: "Inténtalo de nuevo",
          icon: "error",
        });
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/recetas",
        newRecipe
      );
      setNombre(null);
      setDescripcion(null);
      setElements([]);
      setInstrucciones(null);
      setTimeValue(null);
      setInputValue(null);
      setPortionValue(null);

      Swal.fire({
        title: "En hora buena!",
        text: "Tu Receta Fue Creada",
        icon: "success",
      });
    } catch (err) {
      Swal.fire({
        title: "Algo anda mal",
        text: "Inténtalo de nuevo",
        icon: "error",
      });
    }
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <form className="recipe-form" onSubmit={(e) => submitFormRecipe(e)}>
      <section className="recipe-container">
        <p className="title-form">Seleccionar categoría</p>
        <div className="recipe-categories">
          <input
            type="radio"
            name="categoria"
            id="platos"
            value="Platos"
            checked={categoria === "Platos"}
            onChange={handleCategoriaChange}
          />
          <label className="platos" htmlFor="platos">
            Platos
          </label>
          <input
            type="radio"
            name="categoria"
            id="entrantes"
            value="Entrantes"
            checked={categoria === "Entrantes"}
            onChange={handleCategoriaChange}
          />
          <label className="entrantes" htmlFor="entrantes">
            Entrantes
          </label>
          <input
            type="radio"
            name="categoria"
            id="postres"
            value="Postres"
            checked={categoria === "Postres"}
            onChange={handleCategoriaChange}
          />
          <label className="postres" htmlFor="postres">
            Postres
          </label>
          <input
            type="radio"
            name="categoria"
            id="bebidas"
            value="Bebidas"
            checked={categoria === "Bebidas"}
            onChange={handleCategoriaChange}
          />
          <label className="bebidas" htmlFor="bebidas">
            Bebidas
          </label>
        </div>
      </section>
      <section className="recipe-photo-name-container">
        <p className="title-form">Ingresa los siguientes datos</p>
        <div className="cont-recipe-info">
          <div className="cont-recipe-photo">
            <input className="recipe-photo" type="file" hidden />
            <img src={recipePhoto} alt="add a recipe photo" />
          </div>
          <div className="recipe-name-container">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre de la receta"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <textarea
              placeholder="Agrega una descripcion"
              name="descripcion"
              id="descripcion"
              cols="50"
              rows="10"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </section>
      <section className="ingredients-container">
        <p className="title-form">Definir Ingredientes</p>
        <AddAndRemoveIngredients
          elements={elements}
          setElements={setElements}
        />
      </section>
      <section className="recipe-steps">
        <p className="title-form">Instrucciones de preparación</p>
        <div className="cont-preparation-steps">
          <div className="recipe-photo">
            <img src={recipePhoto} alt="add a recipe photo" />
          </div>
          <div className="textarea-container">
            <textarea
              placeholder="Describe los pasos de la preparación..."
              name="instrucciones"
              id="instrucciones"
              cols="50"
              rows="10"
              value={instrucciones}
              onChange={(e) => {
                setInstrucciones(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </section>
      <section className="container-difficulty-portion-time">
        <p className="title-form">Escoge el valor que corresponda</p>
        <SetDifficulty
          inputValue={inputValue}
          setInputValue={setInputValue}
          portionValue={portionValue}
          setPortionValue={setPortionValue}
          timeValue={timeValue}
          setTimeValue={setTimeValue}
        />
      </section>
      <button className="create-recipe-submit-btn" name="submit" type="submit">
        ¡CREAR RECETA!
      </button>
    </form>
  );
}
