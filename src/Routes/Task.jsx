import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Api/api";
import { useParams } from "react-router";
import ImputText from "../componenets/ImputText";
import { useNavigate } from "react-router";
function Task() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState({
    name: "",
    description: "",
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
      const resposta = await api.post(
        `http://localhost:5000/newTask/${id}`,
        state
      );

      navigate("/allprojects");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>New task</h1>
      <form onSubmit={handleSubmit}>
        <ImputText
          label="Name"
          type="string"
          name="name"
          value={state.name}
          onChange={handleChange}
        />

        <ImputText
          label="description"
          type="string"
          name="description"
          value={state.description}
          onChange={handleChange}
        />

        <button type="submit">salvar</button>
        <Link to={"/allprojects"}>
          <button type="submit">voltar</button>
        </Link>
      </form>
    </div>
  );
}

export default Task;
