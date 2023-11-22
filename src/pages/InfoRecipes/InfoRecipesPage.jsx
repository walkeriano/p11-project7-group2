import './InfoRecipesPage.css';
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import DetailRecipe from "../../components/DetailRecipe/DetailRecipe";

export default function InfoRecipes(){
    return(
        <section className='cont-info-recipes'>
            <HeaderLogin/>
            <DetailRecipe/>
        </section>
    )
}