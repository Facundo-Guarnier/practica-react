interface BotonSuperiorProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function BotonSuperior({ onClick, children }: BotonSuperiorProps) {
    return (
		  <button 
        className=' 
          mx-2 px-2 py-3 bg-transparent border-4 w-24 rounded-md font-bold cursor-pointer
          transition
          border-black text-black
          hover:bg-blue-400 hover:text-white 
          dark:border-white dark:text-white
          dark:hover:bg-blue-300 dark:hover:text-black 
        '
        onClick={onClick}
      >
        {children}
      </button>
    )
}
