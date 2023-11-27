import "./AddRecipeForm.css";
import recipePhoto from "../../assets/img/recipePhoto.png"
import AddAndRemoveIngredients from "../AddAndRemoveIngredients/AddAndRemoveIngredients"

export default function AddRecipeForm() {
    return (
        <section className="recipe-form">
            <div className="recipe-container">
                <p className="title-form">Selecciona el tipo de receta que quieres crear</p>
                <div className="recipe-categories">
                    <input type="radio" name="categorie" id="platos" /><label className="platos" htmlFor="platos">Platos</label>
                    <input type="radio" name="categorie" id="entrantes" /><label className="entrantes" htmlFor="entrantes">Entrantes</label>
                    <input type="radio" name="categorie" id="postres" /><label className="postres" htmlFor="postres">Postres</label>
                    <input type="radio" name="categorie" id="bebidas" /><label className="bebidas" htmlFor="bebidas">Bebidas</label>
                </div>
                <section>
                    <p className="title-form">Ingresa los siguientes datos</p>
                    <div className="recipe-photo-name-container">
                        <div className="recipe-photo">
                            <img src={recipePhoto} alt="add a recipe photo" />
                        </div>
                        <div className="recipe-name-container">
                            <input type="text" id="recipe-name" placeholder="Nombre de la receta" /><label htmlFor="recipe-name"></label>
                            <textarea placeholder=" Agrega una descripcion " name="" id="" cols="50" rows="10"></textarea>
                        </div>
                    </div>
                    <p className="title-form">Añade los ingredientes</p>
                    <AddAndRemoveIngredients />
                    <p className="title-form">Instrucción para la preparación</p>
                    <section className="recipe-steps">
                        <textarea placeholder="Describe la preparación, paso por paso..." name="" id="" cols="50" rows="10"></textarea>
                    </section>
                    <p className="title-form">Escoge el valor que corresponda</p>
                    <section className="set-difficulty-portion-time">
                        <div className="set-difficulty">
                            <label htmlFor="difficulty">
                                <input type="number" id="difficulty" name="difficulty" min="1" max="10" defaultValue="1" /> <span>/ 10</span>
                            </label>
                            <p className="p-set-style">DIFICULTAD</p>
                            <div className="plus-minus-btn">
                                <span>+</span>
                                <span>-</span>
                            </div>
                        </div>
                        <div className="set-portion">
                            <label htmlFor="portion">
                                <input type="number" id="portion" name="portion" min="1" max="10" defaultValue="1" /> <span>/ 10</span>
                            </label>
                            <p className="p-set-style">PORCIONES</p>
                            <div className="plus-minus-btn">
                                <span>+</span>
                                <span>-</span>
                            </div>
                        </div>
                        <div className="set-time">
                            <label htmlFor="time">
                                <input type="time" id="time" name="time" min="0" max="12" step="60" />
                            </label>
                            <p className="p-set-style">TIEMPO</p>
                            <div className="plus-minus-btn">
                                <span>+</span>
                                <span>-</span>
                            </div>
                        </div>
                        
                    </section>

                </section>
            </div>
        </section>
    );
}