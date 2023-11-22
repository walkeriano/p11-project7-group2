import "./Login.css";

export default function Login() {
    return (
        <section className="cont-form">

            <label htmlFor="nombre">
                <input placeholder="Nombre" id="nombre" className="inp-credential" name="nombre" type="text" />
            </label>
            
            <label htmlFor="email">
                <input placeholder="Correo" id="email" className="inp-credential" name="email" type="email" />
            </label>

            <button className="submit-btn" name="submit" type="submit" >INICIAR SESIÓN</button>

        </section>
    );
}