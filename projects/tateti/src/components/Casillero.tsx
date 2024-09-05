
export function Casillero({ index, valor, actualizarCasillero }) {

  function onClick() {
    actualizarCasillero(index)
  }

  return (
    <button 
      className="casillero" 
      onClick={onClick}
    >
      {valor}
    </button>
  );
}