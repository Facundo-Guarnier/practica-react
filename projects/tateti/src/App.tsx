import "./index.css"
import { TURNOS } from './constantes/turnos'
import { Tablero } from './components/Tablero'
import { useEffect, useState } from 'react'
import { LINEAS_GANADORAS } from './constantes/lineasGanadoras'
import { BotonSuperior } from './components/BotonSuperior'
import { ModalResultado } from "./components/ModalResultado"

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
  const [darkModeState, setDarkModeState] = useState(false)

  function onClickTema(): void {
    document.documentElement.classList.toggle('dark')
    setDarkModeState(!darkModeState)
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

  function calcularGanador(tablero: string[]): string {
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

  function resetGame(): void {
    console.log('Reset del juego')
    setTablero(Array(9).fill(''))
    setTurn(TURNOS.X)
    setGanador('')
  }

  return (
    <section className='
        m-0 flex justify-center items-center p-0 min-h-screen
        transition-all duration-500
        bg-blue-300 dark:bg-gray-700
      '>
      <main className='
          h-fit w-fit m-10 text-center rounded-lg p-9
          transition-all duration-500
          bg-gray-100 dark:bg-gray-900 
        '>
        <h1 className=' 
          mb-4 text-4xl font-bold 
          transition-all duration-500
          dark:text-white text-gray-900
        '>Tatetí</h1>

        <BotonSuperior onClick={resetGame}>Reset del juego</BotonSuperior>
        <BotonSuperior onClick={onClickTema}>Cambiar tema</BotonSuperior> 

        <Tablero
          tablero={tablero}
          actualizarCasillero={actualizarCasillero}
        ></Tablero>
        {ganador && (
          <ModalResultado resetGame={resetGame}>
            {ganador === 'Empate' ? 'Empate' : `Ganó ${ganador}`}
          </ModalResultado>
        )}
      </main>
    </section>
  )
}

export default App
