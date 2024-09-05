import { useState } from "react"
import { Casillero } from "./Casillero"

export function Tablero({ tablero, actualizarCasillero }) {

  
  return (
    <section className="juego">
      {
        tablero.map((_, index) => (
          <Casillero
            key={index}
            index={index}
            valor={tablero[index]}
            actualizarCasillero={actualizarCasillero}
          ></Casillero>
        ))
      }
    </section>
  )}