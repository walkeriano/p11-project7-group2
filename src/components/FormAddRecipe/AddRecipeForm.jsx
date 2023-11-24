import "./AddRecipeForm.css";
import recipePhoto from "../../assets/img/recipePhoto.png"

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
                    <div></div>

                </section>
            </div>
        </section>
    );
}