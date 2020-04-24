import React, { useState } from 'react'
import './Animaciones.css'

//Ejemplo de como adaptamos el ejercicio de las transiciones a uno con animaciones mediante una hoja de estilos, y como usamos las
//className dinamicas mediante JS.

const Header = ({ show }) => {

  const clases = show
    ? 'header header-active'
    : 'header'

  return (
    <header className={clases}>
      <h1>
        Transiciones CSS en linea
        <span role='img' aria-label='fire'>
          🔥
        </span>
      </h1>
    </header>
  )
}

const App = () => {
  const [ active, setActive ] = useState(false)

  const toggle = () => setActive(!active)

  return (
    <div>
      <button onClick={toggle}>
        { active ? 'Desactivar' : 'Activar' }
      </button>
      <Header show={active} />
    </div>
  )
}

export default App