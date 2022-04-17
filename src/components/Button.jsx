import React from 'react'

export default function Button({setPaciente,value,handSome}) {
const click=(e)=>{
    e.preventDefault();
    if(value==="Editar"){
     handSome(e)
     setPaciente({})
    }
    else if(value==="Enviar"){
     handSome(e)
     
    }
}
 return (
 <input
          id="fecha-de-ingreso"
          type="submit"
          className=" rounded-sm mt-4 p-3  w-full bg-slate-800 text-white hover:bg-slate-900 cursor-pointer transition-colors"
          value={value}
          onClick={(e)=>click(e)}
        />  )
}
