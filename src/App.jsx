import React from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPaciente from './components/ListadoPaciente'
function App () {
  return (

   <div className="container mx-auto mt-20 text-xl font-bold " >

<Header></Header>

<div className="md:flex mt-11">

<Formulario></Formulario>
<ListadoPaciente></ListadoPaciente>
</div>
   </div>

  )
}

export default App
