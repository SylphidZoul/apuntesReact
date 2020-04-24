import React, { useState, useEffect, useDebugValue } from 'react'

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
        Hooks Personalizados
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

// El hook useDebugValue nos ayuda a identificar nuestros hooks dentro de las herramientas de dev de react, este hook va a poner
// una etiqueta o "nombre" de forma optima a nuestro hook pero luego identificarlo depurando. Este hook se utiliza cuando
// planeas compartir y hacer publico un hook personalizado que creamos nosotros mismos.

const useSizes = () => {
  const [ width, setWith ] = useState(window.innerWidth)
  const [ height, setHeight ] = useState(window.innerHeight)

  useDebugValue('Primer Hook')

  // Agregar listener
  const handleResize = () => {
    setWith(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return {
    width,
    height
  }
}

const App = () => {
  const { height, width } = useSizes()

  return (
    <div>
      <Header />
      <h1>
        Width: { width }px  Height: { height }px
      </h1>
    </div>
  )
}

export default App