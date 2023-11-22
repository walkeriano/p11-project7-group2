import { Link } from "react-router-dom";
import Button from "../Button/Button";

import './Categorie.css'

export default function Categorie({ id, tittle, img }) {
  return (
    <Link className="link" to={`/tipo-receta/${id}`}>
           
      <article className='types'>
          <div className='sectionType'>
            <img className="imgType" src={img} alt="Portada de los entrantes" />
            <Button className='color' text={tittle}/>
          </div>
      </article>
    </Link>
  );
}