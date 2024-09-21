interface ModalResultadoProps {
    children: React.ReactNode;
    resetGame: () => void;
    }

export function ModalResultado({ children, resetGame }: ModalResultadoProps ) {
    return (
        <div className='
            fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
            flex justify-center items-center
            transition-all duration-500
            dark:bg-white dark:bg-opacity-50
        '>
            <div className='
                w-fit h-fit p-9 text-center rounded-lg
                transition-all duration-500
                bg-gray-300 dark:bg-gray-900
            '>
                <h2 className='
                    text-3xl font-bold
                    transition-all duration-500
                    dark:text-white text-gray-900
                '>
                    {children}
                </h2>
                <button
                    className='
                        mx-2 mt-5 px-2 py-3 bg-transparent border-2 w-24 rounded-md font-bold cursor-pointer
                        transition
                        border-black text-black
                        hover:bg-blue-400 hover:text-white
                        dark:border-white dark:text-white
                        dark:hover:bg-blue-300 dark:hover:text-black
                    '
                    onClick={resetGame}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}