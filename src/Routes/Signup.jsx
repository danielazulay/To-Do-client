import { useState } from "react";

import api from "../Api/api";

import ImputText from "../componenets/ImputText";
import Menu from "../componenets/Menu";

function Signup() {
  const [state, setState] = useState({
    name: "",
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
      const resposta = await api.post("http://localhost:5000/new", state);

      console.log(resposta.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>

      <Menu />
      <br />

      <form onSubmit={handleSubmit}>
        <ImputText
          label="Name"
          type="string"
          name="name"
          value={state.name}
          onChange={handleChange}
        />

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
        <button type="submit">sign up</button>
      </form>
    </div>
  );
}

export default Signup;
