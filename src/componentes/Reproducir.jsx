import React from "react";
import imgTerapia from "../assets/Captura de pantalla 2024-05-10 093107.png"
import "./Reproducir.css"
import botonRep from "../assets/20513.png"

export const Reproducir = () => {
  return (
    <>
      <img src={imgTerapia}></img>
      <img className="botonRep" src={botonRep}></img>
    </>
  );
};
