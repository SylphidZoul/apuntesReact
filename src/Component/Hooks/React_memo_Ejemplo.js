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

// En este ejemplo le encontramos la vuelta a como hacer que con Memo un componente que tiene de props objetos anidados no se renderize
// en caso de que las props no hayan cambiado. Para lograr esto, simplemente usamos el segundo parametro de la funcion memo luego del
// componente, donde vamos a poner una arrow function con nuestra comparacion personalizada de props, esta recibe por parametros
// el prevProps y el nextProps. Esta funcion tiene que retornar true o false, donde true es no renderizar y false es renderizar,
// acá aplicamos la logica que necesitemos, en este caso verificar si prevProps.info.text es igual a nextProps.info.text, y si
// son iguales nos retornara true, no renderizando.

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
      
    </h1>
  )
})


const TitleNested = React.memo(
  ({ info }) => {
    console.log('%cRender <TitleNested />', 'color: purple')

    return (
      <h1>
        { info.text }
      </h1>
    )
  },
  (prevProps, nextProps) => {
    // Si retorna true no se renderiza
    // Si renorna false esta si se renderiza
    // console.log(prevProps, nextProps)
    return prevProps.info.text === nextProps.info.text
  }
)

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
      <TitleNested
        info={{
          text: title
        }}
      />
    </div>
  )
}

export default App