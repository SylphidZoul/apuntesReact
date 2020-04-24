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

// Acá vemos como usamos la dependencia de la array para que A tome valores nuevos en incrementB cada vez que A cambie, de esta
// manera a B siempre le vamos a sumar el estado actual de A y no el qe tenga memorizado aunque A haya cambiado.
// Importante es no hacer optimizado hasta que la aplicacion se vuelva lenta y nos demos cuenta que lo necesite, de lo contrario
// solo estamos complicando el codigo a cambio de poco beneficio.

const App = () => {
  const [ a, setA ] = useState(0)
  const [ b, setB ] = useState(0)

  const incrementA = useCallback(() => {
    setA(a => a + 1)
  }, [])

  const incrementB = useCallback(() => {
    setB(b => b + a)
  }, [ a ])

  return (
    <div>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
      <Button callback={incrementB}>
        Increment B
      </Button>
      <h1>
        a: { a } b: { b }
      </h1>
    </div>
  )
}

export default App