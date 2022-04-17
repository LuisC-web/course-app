import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Paciente({
 paciente
 ,setPaciente,eliminarPaciente,id
})


{
 const handleDelete=()=>{
const confirm=alert("Quieres eliminar paciente?")
console.log(confirm);

 }
  return (
    <div className=" shadow-md text-white bg-sky-600 rounded-md p-5 m-10">
      <p className="font-bold m-2">
        Nombre de la mascota:{""}{" "}
        <span className="font-normal">{paciente.nombreMascota}</span>
      </p>
      <p className="font-bold m-2">
        Nombre del dueño:{""}{" "}
        <span className="font-normal">{paciente.nombreDuenio}</span>
      </p>
      <p className="font-bold m-2">
        Correo:{""} <span className="font-normal">{paciente.correo}</span>
      </p>
      <p className="font-bold m-2">
        Fecha de ingreso:{""}{" "}
        <span className="font-normal">{paciente.fecha}</span>
      </p>
      <p className="font-bold m-2">
        Sintomas:{""} <span className="font-normal">{paciente.sintomas}</span>
      </p>
      <div className="grid grid-cols-2 m-3 text-black font-medium text-xl">
        <button onClick={()=>console.log(setPaciente(paciente))} className="bg-green-600 hover:bg-green-500 transition-colors p-2 mr-4 rounded-lg">
          Editar paciente
        
        </button>
        <button className="bg-red-600 hover:bg-red-500   rounded-lg" onClick={()=>handleDelete()}>
          Eliminar paciente
        </button>
      </div>
    </div>
  );
}
Paciente.defaultProps = {
  nombreMascota: "",
  nombreDuenio: "",
  correo: "",
  fechaDeIngreso: "",
  sintomas: "",
};
Paciente.PropTypes = {
  nombreMascota: PropTypes.string,
  nombreDuenio: PropTypes.string,
  correo: PropTypes.string,
  fechaDeIngreso: PropTypes.string,
  sintomas: PropTypes.string,
};
