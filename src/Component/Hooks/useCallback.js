import React, { useState, useCallback } from 'react'

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
        Hook useCallback
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

const getRandomColor = () => '#' + Math.random().toString(16).slice(2, 8)

// useCallback es un hoc que se utiliza para memorizar funciones o acciones, se complementa con React.memo al momento de optimizar
// componentes y lograr que no se renderizen si su estado no cambia, useCallback se utiliza en un manejador de eventos, y en la
// sintaxis recibe como primer parametro la funcion a ejecutar y memorizar, y por segundo parametro un array de dependencias,
// Es importante que redactar bien los calculos, ya que al ser memorizados a la primer ejecucion, no queremos que retorne
// a + 1 cuando a vale 0 porque siempre haria 0+1, en este caso nos interesa poner que a => a + 1. Para que tome el estado actual de A
// y luego recien le sume 1, por eso el primer a esta en naranja, como react.memo hacia que no se vuelva a renderizar
// a menos que haya cambiado algo del estado o no se haya interactuado con el componente, useCallback nos ayuda a que a pesar
// de haber interactuado con el y ocacionado un evento, no vuelva a renderizarse.
const Button = React.memo(({ callback, children }) => {

  const styles = {
    padding: '1em',
    fontSize: '20px',
    background: getRandomColor()
  }

  return (
    <button style={styles} onClick={callback}>
      { children }
    </button>
  )
})

const App = () => {
  const [ a, setA ] = useState(0)

  const incrementA = useCallback(() => {
    setA(a => a + 1)
  }, [])

  return (
    <div>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
      <h1>
        a: { a }
      </h1>
    </div>
  )
}

export default App