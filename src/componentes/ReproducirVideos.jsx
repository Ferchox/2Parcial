import React from "react";
import { Reproducir } from "./Reproducir";
import { Descripcion } from "./Descripcion";
import "./ReproducirVideos.css"

export const ReproducirVideos = () => {
  return (
    <>
      <div className="contenedor-reproductor">
        <Reproducir />
        <Descripcion />
      </div>
    </>
  );
};
