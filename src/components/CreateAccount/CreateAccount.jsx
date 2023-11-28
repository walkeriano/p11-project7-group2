import "../CreateAccount/CreateAccount.css";
import photoIcon from "../../assets/img/photoIcon.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function CreateAccount() {
  const [perfilphoto, setPerfilphoto] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);

  const [profile, setProfile] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      if (
        !profile.name ||
        !profile.email ||
        !profile.password ||
        !perfilphoto
      ) {
        console.log("Todos los campos deben estar completos");
        return;
      }
      const response = await axios.post("http://localhost:5000/users", profile);
      setProfile({
        id: null,
        name: "",
        email: "",
        password: "",
      });
      setPerfilphoto(null);
      navigate("/profile-page");
    } catch (err) {
      console.log("error");
    }
  };

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPerfilphoto(reader.result);
        setImageSelected(true);
      };
      reader.readAsDataURL(file);
    } else {
      setPerfilphoto(null);
      setImageSelected(false);
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
            <input
              className="input-image"
              hidden
              onChange={handleimage}
              name="perfilphoto"
              id="profile"
              type="file"
              accept="image/png"
            />
            {perfilphoto ? (
              <img className="image-on" src={perfilphoto} alt="perfil photo" />
            ) : (
              <img className="image-of" src={photoIcon} alt="photo icon" />
            )}
          </div>
          {imageSelected ? (
            <div className="notification-true">
              <span></span>
              <p>¡Bien hecho!</p>
            </div>
          ) : (
            <div className="notification-false">
              <span></span>
              <p>Adjuntar Imagen</p>
            </div>
          )}
        </div>
        <div className="cont-form-create">
          <label htmlFor="name">
            <input
              placeholder="Nombre"
              id="name"
              className="inp-credential"
              name="name"
              type="text"
              value={profile.name}
              onChange={(e) => {
                setProfile((prevState) => {
                  return { ...prevState, name: e.target.value };
                });
              }}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Email"
              id="email"
              className="inp-credential"
              name="email"
              type="email"
              value={profile.email}
              onChange={(e) => {
                setProfile((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
              required
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="Crear contraseña"
              id="password"
              className="inp-credential"
              name="password"
              type="password"
              value={profile.password}
              onChange={(e) => {
                setProfile((prevState) => {
                  return { ...prevState, password: e.target.value };
                });
              }}
              required
              minLength="6"
            />
          </label>
        </div>
      </section>
      <button
        onClick={submitForm}
        className="submit-btn"
        name="submit"
        type="submit"
      >
        Registrar
      </button>
    </section>
  );
}
