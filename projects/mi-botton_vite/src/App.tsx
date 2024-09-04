import { Children } from "react";
import "./App.css";
import { MiBotton } from "./Mi-botton";

export function App() {

  function mayusculas(text:string):string {
    return text.toUpperCase();
  }

  const elemento = <p>#haveaniceday</p>

  const datos = [
    {text: "Hola", userName: "Facu", initialEstado: true, children: 'Esto es un "children"'},
    {text: "Hola", userName: "Pepe", initialEstado: false, children: <h2>Esto es un "children2"</h2>},
    {text: "Hola", userName: "Juan", initialEstado: true, children: <strong>Esto es un "children3"</strong>},
  ]

  //! Cada property (parametro) de MiBotton debe ser una constante, no es 
  //! buena practica modificarlo.
  return (
    <section className="App">
    <h1>Forma tradicional con HTML</h1> 
      <MiBotton 
        funcion={mayusculas} 
        elemento={elemento}
        text="Hola" 
        userName="Facu"
        initialEstado={true}
      >
        Esto es un "children"
      </MiBotton>

      <MiBotton 
        funcion={mayusculas} 
        elemento={elemento}
        text="Hola" 
        userName="Pepe"
        initialEstado={false}
      >
        <h2>Esto es un "children2"</h2>
      </MiBotton>

      <MiBotton 
        funcion={mayusculas} 
        elemento={elemento}
        text="Hola" 
        userName="Juan"
        initialEstado={true}
      >
        <strong>Esto es un "children3"</strong>
        <strong>Esto es un "children4"</strong>
        <strong>Esto es un "children5"</strong>
      </MiBotton>
      <hr />
      <hr />
      <hr />

      <h1>Forma con TypeScript</h1> 
      {/* Esto ya es javascript */}
      {
        datos.map((dato) => {
          return (
            <MiBotton 
              key={dato.userName}   //! Siempre poner un key y que sea un id único, para que React sepa que elemento es.
              funcion={mayusculas} 
              elemento={elemento}
              text={dato.text} 
              userName={dato.userName}
              initialEstado={dato.initialEstado}
            >
              {dato.children}
            </MiBotton>
          )
        })
      }

    </section>

    //! Forma con TypeScript

  );
} 