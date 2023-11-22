import "../CreateAccount/CreateAccount.css";
import photoIcon from "../../assets/img/photoIcon.png";
import { useState } from "react";

export default function CreateAccount() {
    const [perfilphoto, setPerfilphoto] = useState(null);
    const handleimage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPerfilphoto(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPerfilphoto(null);
        }

    };

    return (
        <section className="body-sesion">
            <section className="create-account">
                <div className="login-photo">
                    <div
                        className="photo-circle"
                        onClick={() => document.querySelector(".input-image").click()}
                    >
                        <input className="input-image" hidden onChange={handleimage} name="perfilphoto" id="profile" type="file" accept="image/png" />

                        {perfilphoto ? (
                            <img className="image-on" src={perfilphoto} alt="perfil photo" />
                        ) : (
                            <img className="image-of" src={photoIcon} alt="photo icon" />
                        )}
                    </div>
                    <div className="notification">
                        <span></span>
                        <p>Adjuntar Imagen</p>
                    </div>
                </div>
                <div className="cont-form-create">
                    <label htmlFor="nombre">
                        <input placeholder="Nombre" id="nombre" className="inp-credential" name="nombre" type="text" />
                    </label>
                    <label htmlFor="email">
                        <input placeholder="Correo" id="email" className="inp-credential" name="email" type="email" />
                    </label>
                    <label htmlFor="password">
                        <input placeholder="Crear contraseña" id="password" className="inp-credential" name="password" type="password" />
                    </label>
                </div>
            </section>
            <div>
                <p><a href=""></a></p>
                <button className="submit-btn" name="submit" type="submit" >CREAR CUENTA</button>
            </div>
        </section>
    );
}