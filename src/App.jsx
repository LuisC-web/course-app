import { React, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente]=useState({})
  const eliminarPaciente=(id)=>{
   console.log(id);
const nuevoPacientes= pacientes.filter(pacientes=>pacientes.id!=id)
setPacientes(nuevoPacientes);
  }
  return (
    <div className="container mx-auto mt-20 text-xl font-bold ">
      <Header></Header>

      <div className="md:flex mt-11">
        <Formulario
        paciente={paciente}
        setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        ></Formulario>
        <ListadoPaciente setPaciente={setPaciente} pacientes={pacientes} eliminarPaciente={eliminarPaciente}></ListadoPaciente>
      </div>
    </div>
  );
}

export default App;
