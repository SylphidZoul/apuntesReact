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
        React.memo
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
// React.memo se utiliza para guardar en memoria cosas que con los ciclos no van a cambiar, aplicado a react seria que no vuelva a
// renderizar elementos que no han cambiado, esto se utiliza para optimizar la aplicacion en componentes funcionales.
// En este ejemplo vemos como 2 componentes funcionales que renderizan solo un state del componente padre, cada vez que cualquiera de 
// los 2 cambien, ambos se vuelven a renderizar, Al utilizar el HOC React.memo envolviendo los componentes, este revisa si las props
// cambiaron en cada ciclo, y si no cambiaron, no vuelve a renderizar el componente. Importante saber que Memo solo hace la comparacion
// de props a primer nivel, es decir, si dentro de las props tiene objetos anidados, no los revisara y si alguna propiedad cambio
// dentro, no lo notara. Esto se utiliza en applicaciones de un uso intensivo de cpu, no hace falta ponerselo a todo.

// React.memo() HOC
const Counter = React.memo(({ count }) => {
  console.log('%cRender <Counter />', 'color: blue')

  return (
    <h1>
      { count }
    </h1>
  )
})

const Title = React.memo(({ text }) => {
  console.log('%cRender <Title />', 'color: orangered')

  return (
    <h1>
      { text }
    </h1>
  )
})

const App = () => {
  const [ title, setTitle ] = useState('')
  const [ count, setCount ] = useState(0)
  
  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleInput}
      />
      <button onClick={handleAdd}>
        Add
      </button>
      <Counter count={count} />
      <Title text={title} />
    </div>
  )
}

export default App