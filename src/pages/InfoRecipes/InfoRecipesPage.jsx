import './InfoRecipesPage.css';
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import DetailRecipe from "../../components/DetailRecipe/DetailRecipe";
import Footer from '../../components/Footer/Footer';

export default function InfoRecipes(){
    
    return(
        <section className='cont-info-recipes'>
            <HeaderLogin/>
            <DetailRecipe/>
            <Footer />
        </section>
    )
}