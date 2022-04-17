import React, { useState } from 'react'
import PropTypes from 'prop-types';




export default function Paciente({nombreMascota,nombreDuenio,correo,fechaDeIngreso,sintomas}) {


  return (
<div className=" shadow-md bg-sky-600 rounded-md p-5 m-10">
      <p className="font-bold">Nombre de la mascota:{""} <span className="font-normal">{nombreMascota}</span></p>
      <p className="font-bold">Nombre del dueño:{""} <span className="font-normal">{nombreDuenio}</span></p>
      <p className="font-bold">Correo:{""} <span className="font-normal">{correo}</span></p>
      <p className="font-bold">Fecha de ingreso:{""} <span className="font-normal">{fechaDeIngreso}</span></p>
      <p className="font-bold">Sintomas:{""} <span className="font-normal">{sintomas}</span></p>
     </div>  )
}
Paciente.defaultProps={
nombreMascota:"Juanito",
nombreDuenio:"Alex",
correo:"correo@example.com",
fechaDeIngreso:"Hoy",
sintomas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo nulla, nam corporis ullam consectetur et voluptas laboriosam. Unde cupiditate perspiciatis dicta quae fugit similique consectetur voluptatibus alias natus! Repudiandae."
}
Paciente.PropTypes={
 nombreMascota:PropTypes.string,
 nombreDuenio:PropTypes.string,
 correo:PropTypes.string,
 fechaDeIngreso:PropTypes.string,
 sintomas:PropTypes.string,

}