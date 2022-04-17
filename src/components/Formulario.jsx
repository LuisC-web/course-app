import { React, useState } from "react";
import Error from "./Error.jsx";
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [correo, setCorreo] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const handSome = (e) => {
    e.preventDefault();
    console.warn(
      "Cargando...",
      [nombre, nombreDuenio, correo, sintomas].includes("")
    );

    if ([nombre, nombreDuenio, correo, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
    }
  };

  console.warn(nombre);
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-4xl text-center ">Formulario</h2>
      <br />
      <p className="text-center">
        Añadir paciente, {""}
        <span className="text-orange-400">Manejalos 🐶🐱</span>
      </p>
      <form
        className="shadow-lg bg-sky-600 rounded-md p-5 text-md mt-10"
        onSubmit={handSome}
      >
        {error && <Error message="Hay un error"></Error>}

        <div className="mt-5">
          <label className="block" htmlFor="mascota">
            Nombre:
          </label>
          <input
            id="mascota"
            type="text"
            className="rounded-lg mt-4 p-1 border-2 border-slate-900 w-full placeholder-slate-800"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="nombre-del-dueño">
            Nombre del dueño:
          </label>
          <input
            id="nombre-del-dueño"
            type="text"
            className="rounded-lg mt-4 p-1 border-2 border-slate-900 w-full placeholder-slate-800"
            placeholder="Nombre del dueño"
            value={nombreDuenio}
            onChange={(e) => setNombreDuenio(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="correo">
            Correo:
          </label>
          <input
            id="correo"
            type="mail"
            className="rounded-lg mt-4 p-1 border-2 border-slate-900 w-full placeholder-slate-800"
            placeholder="correo@example.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="fecha-de-ingreso">
            Fecha de ingreso:
          </label>
          <input
            id="fecha-de-ingreso"
            type="date"
            className="rounded-lg mt-4 p-1 border-2 border-slate-900 w-full placeholder-slate-800"
          />
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="sintomas">
            Descripción de sintomas:
          </label>
          <textarea
            id="sintomas"
            type="text"
            className="rounded-lg mt-4 p-1 border-2 border-slate-900 w-full placeholder-slate-800"
            placeholder="Descripción de sintomas"
            vvalue={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          id="fecha-de-ingreso"
          type="submit"
          className=" rounded-sm mt-4 p-3  w-full bg-slate-800 text-white hover:bg-slate-900 cursor-pointer transition-colors"
          value="Enviar"
        />
      </form>
    </div>
  );
}
export default Formulario;
