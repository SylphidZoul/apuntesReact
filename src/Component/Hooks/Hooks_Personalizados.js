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

// los Hooks personalizados se utilizan como los HOCS en componentes de clase, son apartados de logica que podemos reutilizar
// en distintos componentes, los Hooks personalizados deben siempre comenzar por la palabra use seguida del nombre con mayuscula
// en la primera letra, luego dentro puede utilizar todo lo de un componente funcional normal, incluyendo useState y useEffect, luego
// en el return, debe retornar un objetos con los datos que vamos a entregar, en este caso width y height.

const useSizes = () => {
  const [ width, setWith ] = useState(window.innerWidth)
  const [ height, setHeight ] = useState(window.innerHeight)

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