import "./Login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        setError("");
        let userLocalStorage = {name: response.data[0].name, profile: response.data[0].profile, email: response.data[0].email};
        localStorage.setItem('user', JSON.stringify(userLocalStorage));
        Swal.fire({
          title: "Bienvenido!",
          text: "Iniciaste sesión correctamente",
          icon: "success"
        });
        navigate("/profile-page");
      } else {
        Swal.fire({
          title: "Credenciales incorrectas",
          text: "Inténtalo de nuevo",
          icon: "error"
        });
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setError("Error al intentar iniciar sesión. Inténtalo de nuevo.");
    }
  };


  return (
    <section className="cont-form">
      <label htmlFor="email">
        <input
          placeholder="Email"
          className="inp-credential"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        <input
          placeholder="Correo"
          className="inp-credential"
          name="email"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin} className="submit-btn" name="submit" type="button">
        Ingresar
      </button>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
}
