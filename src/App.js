import logo from "./logo.svg";
import "./App.css";
import Signup from "./Routes/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Allprojects from "./Routes/Allprojects";
import Newtask from "./Routes/Newtask";
import Task from "./Routes/Task";
import NewProject from "./Routes/NewProject";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allprojects" element={<Allprojects />} />
        <Route path="/newtask/:id" element={<Newtask />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
