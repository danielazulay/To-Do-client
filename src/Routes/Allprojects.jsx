import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Api/api";
import Task from "./Task.css";

function Allprojects() {
  const [state, setState] = useState([]);

  useEffect((a) => {
    async function getProjects() {
      try {
        const mount = true;
        if (mount) {
          const resposta = await api.get("http://localhost:5000/allproject");

          setState([...resposta.data]);
          console.log(resposta.data);
        }
        return () => {
          mount = false;
        };
      } catch (err) {
        console.log(err);
      }
    }
    getProjects();
  });

  async function handleDelete(id) {
    try {
      const resposta = await api.delete(
        `http://localhost:5000/deletetask/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteProject(id) {
    try {
      const resposta = await api.delete(
        `http://localhost:5000/deleteproject/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="title">
        {" "}
        <h1> Welcome , To Do List </h1>{" "}
        <Link to={`/newproject`}>
          <i class="fas fa-plus-circle"></i>{" "}
        </Link>
      </div>

      <ul>
        {state.map((project) => {
          return (
            <li>
              {project.title}
              <Link to={`/task/${project._id}`}>
                {" "}
                <i class="fas fa-plus"></i>
              </Link>{" "}
              <a onClick={() => handleDeleteProject(project._id)}>
                <i class="fas fa-minus-circle"></i>
              </a>
              {project.tasks.map((a) => {
                return (
                  <div className="task">
                    <p>
                      <Link to={`/newtask/${a._id}`}>{a.name}</Link>:{" "}
                      {a.description}
                    </p>
                    <a onClick={() => handleDelete(a._id)}>
                      <i class="fas fa-minus-circle"></i>
                    </a>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Allprojects;
