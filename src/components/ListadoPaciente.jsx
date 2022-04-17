import {React, useEffect } from "react";
import Paciente from "./Paciente";
function ListadoPaciente({ pacientes, setPaciente }) {
 useEffect(() => {
  console.log("nuevo paciente")
 }, [pacientes])
 
  return (
    <div className="md:w-1/2 lg:w-3/5 overflow-scroll h-screen">
      <h2 className=" font-black text-4xl text-center">Listado Paciente</h2>
      <br />
      <p className="text-center ">
        Administra tus pacientes y{" "}
        <span className="text-orange-400">citas</span>
      </p>
      {pacientes.map((paciente, id) => {
        return (
          <Paciente
            key={paciente.id}
           paciente={paciente}
            setPaciente={setPaciente}
          ></Paciente>
        );
      })}
    </div>
  );
}

export default ListadoPaciente;
