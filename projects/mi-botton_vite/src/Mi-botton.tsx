//! Esto es un componente, es decir, una factoria de elementos. 
//! Es una funcion que devuelve elementos.

import { useState } from "react"; //! Hooks

export function MiBotton({ children, text, userName, funcion, elemento, initialEstado}) {
  
  const [isEstado2, setIsEstado2 ] = useState(initialEstado);  //! Hook, initialEstado no lo toco porque debe ser constante
  const buttonClassNames = isEstado2 ? "mi-botton activo" : "mi-botton inactivo";

  function handleClick() {
    setIsEstado2(!isEstado2);
  }

  return (
      <div>
        { /* Esto es un comentario en JSX */}
        <button
          className={buttonClassNames}
          onClick={handleClick}
        >
          {text}: {funcion(userName)} {elemento}
        </button>

        <div>
          {children}
        </div>

      </div>
    );
  }