import "./UserAdvice.css";


export default function UserAdvice() {
    return (

        <section className='cont-useradvice'>
            <div className='cont-advice'>
                <p className='ms'>
                    En hora buena jorge!<br /> <br /><br />
                    Gracias por compartir tus recetas y hacer más grande esta comunidad!
                </p>
            </div>
            <button className='btn-terminar'>
                Terminar
            </button>
            <div className='ms-finaladvice'>
                <p className='ms1'>
                    Explora, comparte
                </p>
                <p className='ms2'>
                    y disfruta
                </p>
            </div>
        </section>

    );
}