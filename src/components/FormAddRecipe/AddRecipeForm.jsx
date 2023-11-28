import "./AddRecipeForm.css";
import recipePhoto from "../../assets/img/recipePhoto.png"
import AddAndRemoveIngredients from "../AddAndRemoveIngredients/AddAndRemoveIngredients"
import SetDifficulty from "../SetValorInputs/SetValorInputs";
import { useState } from "react";
import axios from "axios";

export default function AddRecipeForm() {

    const [elements, setElements] = useState([]);

    // function createRecipe {
    //     axios.post("`http://localhost:5000/recetas",{ "id": 2,
    //     "nombre": "",
    //     "imagen": "",
    //     "categoria": "",
    //     "dificultad": "",
    //     "tiempo": 2,
    //     "duracion": "",
    //     "porciones": 4,
    //     "descripcion": "",
    //     "imagenPreparacion": "https://media.gq.com.mx/photos/5e74fae5bb3b8d000829a104/16:9/w_1920,c_limit/GettyImages-966407886.jpg",
    //     "ingredientes": elements,
    //     "instrucciones": [     ]})
    // }




    return (
        <form className="recipe-form" >
            <section className="recipe-container">
                <p className="title-form">Seleccionar categoría</p>
                <div className="recipe-categories">
                    <input type="radio" name="categorie" id="platos" /><label className="platos" htmlFor="platos">Platos</label>
                    <input type="radio" name="categorie" id="entrantes" /><label className="entrantes" htmlFor="entrantes">Entrantes</label>
                    <input type="radio" name="categorie" id="postres" /><label className="postres" htmlFor="postres">Postres</label>
                    <input type="radio" name="categorie" id="bebidas" /><label className="bebidas" htmlFor="bebidas">Bebidas</label>
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
                        <input type="text" id="recipe-name" placeholder="Nombre de la receta" />
                        <textarea placeholder=" Agrega una descripcion " name="" id="" cols="50" rows="10"></textarea>
                    </div>
                </div>
            </section>
            <section className="ingredients-container">
                <p className="title-form">Añade los ingredientes</p>
                <AddAndRemoveIngredients elements={elements} setElements={setElements} /> 
            </section>
            <p className="title-form">Instrucción para la preparación</p>
            <section className="recipe-steps">
                <div className="recipe-photo">
                    <img src={recipePhoto} alt="add a recipe photo" />
                </div>
                <div className="textarea-container">
                    <textarea placeholder="Describe la preparación, paso por paso..." name="" id="" cols="50" rows="10"></textarea>
                </div>
            </section>
            <p className="title-form">Escoge el valor que corresponda</p>
            <section className="set-difficulty-portion-time">
                <SetDifficulty />
            </section>
            <button className="create-recipe-submit-btn" name="submit" type="submit">
                ¡CREAR RECETA!
            </button>
        </form>
    );
}