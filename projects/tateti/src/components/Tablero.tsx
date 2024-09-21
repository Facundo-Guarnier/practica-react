import { Casillero } from './Casillero'


interface TableroProps {
  tablero: string[]
  actualizarCasillero: (index: number) => void
}

export function Tablero({ tablero, actualizarCasillero }: TableroProps) {
  return (
      <section className='mt-8 grid grid-cols-3 gap-3'>
        {tablero.map((_, index) => (
          <Casillero
            key={index}
            index={index}
            actualizarCasillero={actualizarCasillero}
            >
              {tablero[index]}
            </Casillero>
          ))}
      </section>
  )
}
