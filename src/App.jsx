import { React, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente]=useState({})
  return (
    <div className="container mx-auto mt-20 text-xl font-bold ">
      <Header></Header>

      <div className="md:flex mt-11">
        <Formulario
        paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        ></Formulario>
        <ListadoPaciente setPaciente={setPaciente} pacientes={pacientes}></ListadoPaciente>
      </div>
    </div>
  );
}

export default App;
