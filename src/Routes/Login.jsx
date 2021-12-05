import { useState } from "react";
import { useNavigate } from "react-router";
import Menu from "../componenets/Menu";
import api from "../Api/api";

import ImputText from "../componenets/ImputText";

function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(Event) {
    setState({
      ...state,
      [Event.currentTarget.name]: Event.currentTarget.value,
    });
  }
  async function handleSubmit(Event) {
    Event.preventDefault();
    try {
      const resposta = await api.post("http://localhost:5000/login", state);
      if (resposta.data) {
        localStorage.setItem("logado", JSON.stringify({ ...resposta.data }));
        navigate("/allprojects");
      }

      alert("Erro de Login", "Não foi possivel fazer o login");
      console.log(localStorage);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <br />
      <h1>Login</h1>

      <br />
      <Menu />
      <br />
      <form onSubmit={handleSubmit}>
        <ImputText
          label="email"
          type="string"
          name="email"
          value={state.email}
          onChange={handleChange}
        />

        <ImputText
          label="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;
