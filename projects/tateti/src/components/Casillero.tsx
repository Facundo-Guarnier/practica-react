interface CasilleroProps {
  index: number
  children: React.ReactNode;
  actualizarCasillero: (index: number) => void
}

export function Casillero({ index, children, actualizarCasillero }: CasilleroProps) {
  function onClick() {
    actualizarCasillero(index)
  }

  return (
    <button 
      className='
        w-24 h-24 border-4 rounded-md grid items-center cursor-pointer text-5xl
        transition 
        border-black text-black
        hover:bg-blue-400 hover:text-black 
        dark:border-white dark:text-white
        dark:hover:bg-blue-300 dark:hover:text-black 
      ' 
      onClick={onClick}
    >
      {children}
    </button>
  )
}
