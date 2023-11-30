import "../CreateAccount/CreateAccount.css";
import photoIcon from "../../assets/img/photoIcon.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function CreateAccount() {
  const [profile, setProfile] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    profile: "",
  });

  const [imageSelected, setImageSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const url = await uploadImage(file);
    setImageUrl(url);
    setImageSelected(true);
    setProfile((prevState) => {
      return { ...prevState, profile: url };
    });
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=4dfb67292154f020cee361189a69a258",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.data.url;
  };

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (
        !profile.name ||
        !profile.email ||
        !profile.password ||
        !profile.profile
      ) {
        console.log("error al enviar");
        return;
      }
      const response = await axios.post("http://localhost:5000/users", profile);
      console.log(response, profile);
      let userLocalStorage = {
        name: response.data.name,
        profile: response.data.profile,
        email: response.data.email,
      };
      localStorage.setItem("user", JSON.stringify(userLocalStorage));
      setProfile({
        id: null,
        name: "",
        email: "",
        password: "",
        profile: "",
      });
      navigate("/profile-page");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <form className="body-sesion" onSubmit={(e) => submitForm(e)}>
      <section className="create-account">
        <div className="login-photo">
          <div
            className="photo-circle"
            onClick={() => document.querySelector(".input-image").click()}
          >
            <input
              className="input-image"
              hidden
              onChange={(e) => handleImageChange(e)}
              name="perfilphoto"
              id="profile"
              type="file"
              accept="image/png"
            />
            {imageUrl ? (
              <img className="image-on" src={imageUrl} alt="perfil photo" />
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
    </form>
  );
}
