import React, { useState, useEffect } from 'react'

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
        Hook useEffect
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

// Ejemplo de como usamos el useEffect para agregar un eventListener y luego en su retorno lo limpiamos ya que al ser componentDidMount
// y componentDidUpdate al a vez, este carga un nuevo evento escuchador cada vez que se ejecuta, por lo que limpiamos cada vez
// que haya una actualizacion para que no se nos acumulen muchos eventListeners en memoria.

const App = () => {
  const [ mouseX, setMouseX ] = useState(0)
  const [ mouseY, setMouseY ] = useState(0)

  const handleMove = (e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  })

  return (  
    <div>
      <Header />
      <h1>
        X: { mouseX } Y: { mouseY }
      </h1>
    </div>
  )
}

export default App