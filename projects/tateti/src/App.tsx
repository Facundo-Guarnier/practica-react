import './App.css'
import "./index.css"
import { TURNOS } from './constantes/turnos'
import { Tablero } from './components/Tablero'
import { useEffect, useState } from 'react'
import { LINEAS_GANADORAS } from './constantes/lineasGanadoras'

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNOS.X)
  const [ganador, setGanador] = useState('')

  useEffect(() => {
    if (ganador === 'Empate') {
      abrirModalEmpate()
    } else if (ganador !== '') {
      abrirModalGanador(ganador)
    }
  }, [ganador])

  function actualizarCasillero(index: number) {
    //! Si el casillero ya está ocupado o ya hay un ganador, no hacer nada
    if (tablero[index] || ganador) {
      return null
    }

    //! Actualizar el tablero
    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turn
    setTablero(nuevoTablero)
    setTurn(turn === TURNOS.X ? TURNOS.O : TURNOS.X)

    //! Verificar si hay un ganador
    //? Como hago para al mostrar el modal, el tablero ya esté actualizado?
    const ganadorNuevo = calcularGanador(nuevoTablero)
    if (ganadorNuevo) {
      setGanador(ganadorNuevo)
      // abrirModalGanador(ganadorNuevo)
    } else if (nuevoTablero.every((casillero) => casillero)) {
      setGanador('Empate')
      // abrirModalEmpate()
    }
  }

  function abrirModalGanador(ganadorNuevo: string) {
    alert(`Ganó ${ganadorNuevo}`)
  }

  function abrirModalEmpate() {
    alert('Empate')
  }

  function calcularGanador(tablero: string[]) {
    for (let i = 0; i < LINEAS_GANADORAS.length; i++) {
      const [a, b, c] = LINEAS_GANADORAS[i]
      if (
        tablero[a] &&
        tablero[a] === tablero[b] &&
        tablero[a] === tablero[c]
      ) {
        setGanador(tablero[a])
        return tablero[a]
      }
    }
    return ''
  }

  function resetGame() {
    setTablero(Array(9).fill(''))
    setTurn(TURNOS.X)
    setGanador('')
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
