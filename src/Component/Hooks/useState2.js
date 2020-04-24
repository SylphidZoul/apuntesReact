import React, { useState } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}
// Utilizando useState para crear un booleano que mediante un boton, active y desactive la visualizacion del header.
const App = () => {
  const [ isActive, setActive ] = useState(false)

  const toggle = () => {
    setActive(!isActive)
  }

  return (
    <div>
      { isActive && <Header /> }
      <button onClick={toggle}>
        { isActive ? 'Desactivar' : 'Activar' }
      </button>
    </div>
  )
}

export default App