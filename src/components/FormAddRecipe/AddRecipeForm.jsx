import "./AddRecipeForm.css";
import recipePhoto from "../../assets/img/recipePhoto.png";
import AddAndRemoveIngredients from "../AddAndRemoveIngredients/AddAndRemoveIngredients";
import SetValorInputs from "../SetValorInputs/SetValorInputs";
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

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [imageUrl1, setImageUrl1] = useState(null);

  const [selectedImage2, setSelectedImage2] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleImageChange = async (e, setImage, setSelectedImage) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const url = await uploadImage(file);
    setImage(url);
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=4dfb67292154f020cee361189a69a258",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    // Retorna la URL de la imagen
    return data.data.url;
  };

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
      imagen: imageUrl1,
      imagenPreparacion: imageUrl2,
      userData:[user]
    };

    try {
      if (
        nombre === null ||
        descripcion === null ||
        elements === null ||
        instrucciones === null ||
        timeValue === null ||
        inputValue === null ||
        portionValue === null ||
        imageUrl1 === null ||
        imageUrl2 === null
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
      setImageUrl1(null);
      setImageUrl2(null);

      Swal.fire({
        title: "En hora buena!",
        text: "Tu Receta Fue Creada",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
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
          <div
            onClick={() => document.querySelector(".recipe-photo").click()}
            className="cont-recipe-photo"
          >
            <input
              className="recipe-photo"
              type="file"
              hidden
              onChange={(e) =>
                handleImageChange(e, setImageUrl1, setSelectedImage1)
              }
            />
            {imageUrl1 ? (
              <img src={imageUrl1} alt="Uploaded" />
            ) : (
              <img src={recipePhoto} alt="add a recipe photo" />
            )}
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
              placeholder="Descripcion de la receta"
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
          <div onClick={() => document.querySelector(".input-image-ingredients").click()} className="recipe-photo">
            <input
              className="input-image-ingredients"
              type="file"
              hidden
              onChange={(e) =>
                handleImageChange(e, setImageUrl2, setSelectedImage2)
              }
            />
            {imageUrl2 ? (
              <img src={imageUrl2} alt="Uploaded" />
            ) : (
              <img src={recipePhoto} alt="add a recipe photo" />
            )}
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
        <SetValorInputs
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
