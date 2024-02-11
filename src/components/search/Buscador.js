import React, { useState } from "react";
import "./buscador.css";
import { ImSearch } from "react-icons/im";

const Buscador = () => {
  const [ciudad, setCiudad] = useState("");

  const handleBuscaCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.lenght > 3) fetchClima();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="contenedor-busqueda">
          <input
            type="text"
            placeholder="Buscar..."
            className="input-busqueda"
            value={ciudad}
            onChange={handleBuscaCiudad}
          />
          <button className="boton-busqueda">
            {" "}
            <ImSearch />
          </button>
        </div>
      </form>
    </>
  );
};

export default Buscador;
