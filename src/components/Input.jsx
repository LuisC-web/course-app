import React from 'react'

export default function Input() {
  return (
<div className="mt-5">
          <label className="block" htmlFor='mascota'>
            Nombre:
          </label>
            <input id="mascota" type="text" className="rounded-lg mt-4 p-1 border-2 border-slate-900 w-full placeholder-slate-800" placeholder='Nombre de la mascota'/>
        </div>  )
}
