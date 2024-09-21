import './App.css'
import "./index.css"
import { TURNOS } from './constantes/turnos'
import { Tablero } from './components/Tablero'
import { createContext, useEffect, useState } from 'react'
import { LINEAS_GANADORAS } from './constantes/lineasGanadoras'

function App() {

  //! Estados: Son asincronos, no se actualizan inmediatamente
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNOS.X) 
  const [ganador, setGanador] = useState('')

  
  //! Efectos: Se ejecutan después de que el componente se renderiza y cuando cambia el estado
  useEffect(() => {
    if (ganador === 'Empate') {
      abrirModalEmpate()
    } else if (ganador !== '') {
      abrirModalGanador(ganador)
    }
  }, [ganador])
  
  //! Contexto: Se utiliza para pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel
  const temaContext = createContext('claro')
  const [state, setState] = useState({ tema: 'claro' })

  function onClickTema() {
    const tema = state.tema === 'claro' ? 'oscuro' : 'claro'
    console.log(tema)
    setState({ tema })
  }


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
    const ganadorNuevo = calcularGanador(nuevoTablero)
    if (ganadorNuevo) {
      setGanador(ganadorNuevo)
    } else if (nuevoTablero.every((casillero) => casillero)) {
      setGanador('Empate')
    }
  }

  function abrirModalGanador(ganadorNuevo: string) {
    // alert(`Ganó ${ganadorNuevo}`)
    console.log(`Ganó ${ganadorNuevo}`)
  }

  function abrirModalEmpate() {
    // alert('Empate')
    console.log('Empate')
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
      <h1>Tatetí</h1>
      <button
        onClick={resetGame}
      >
        Reset del juego
      </button>

      <button
        onClick={onClickTema}
      >
        Cambiar tema
      </button>

      <Tablero
        tablero={tablero}
        actualizarCasillero={actualizarCasillero}
      ></Tablero>
    </main>
  )
}

export default App
