import './App.css'
import "./index.css"
import { TURNOS } from './constantes/turnos'
import { Tablero } from './components/Tablero'
import { useState } from 'react'
import { LINEAS_GANADORAS } from './constantes/lineasGanadoras'

function App() {

  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNOS.X)
  const [ganador, setGanador] = useState(null)

  function actualizarCasillero(index: number) {
    if (tablero[index] || ganador) {
      return null
    }

    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turn
    setTablero(nuevoTablero)
    setTurn(turn === TURNOS.X ? TURNOS.O : TURNOS.X)

    //? Como hago para al mostrar el modal, el tablero ya esté actualizado?
    const ganadorNuevo = calcularGanador(nuevoTablero)
    setGanador(ganadorNuevo)
    if (ganadorNuevo) {
      abrirModalGanador(ganadorNuevo)
    } else if (nuevoTablero.every(casillero => casillero)) {
      setGanador('Empate')
      abrirMoodalEmpate()
    }
  }

  function abrirModalGanador(ganadorNuevo) {
    alert(`Ganó ${ganadorNuevo}`)
  }

  function abrirMoodalEmpate() {
    alert('Empate')
  }

  function calcularGanador(tablero: string[]) {
    for (let i = 0; i < LINEAS_GANADORAS.length; i++) {
      const [a, b, c] = LINEAS_GANADORAS[i]
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        setGanador(tablero[a])
        return tablero[a]
      }
    }
    return null
  }

  function resetGame() {
    setTablero(Array(9).fill(null))
    setTurn(TURNOS.X)
    setGanador(null)
  }


  return (
    <main className='tablero'>
      <button
        onClick={resetGame}
      >
        Reset del juego
      </button>

      <h1>Tatetí</h1>

      <Tablero
        tablero={tablero}
        actualizarCasillero={actualizarCasillero}
      ></Tablero>

    </main>
  )
}

export default App
