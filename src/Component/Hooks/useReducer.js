import React, { useReducer } from 'react'

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
        Hook useReducer
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
// El hook useReducer se utiliza para almacenar muchos estados de componentes hijos dentro de un objeto, la sintaxis de declaracion
// dentro del componente el similar al useState con la diferencia de que esta nos devuelve un state con el objeto del estado y una
// funcion dispatch que sirve como el setter, por parametros el useReducer recibe una funcion pura que va a contener la logica
// de las propiedades a settear y por segundo parametro el initialState, ambos se declaran fuera del componente, la funcion
// pura en este caso reducer recibe como parametros el estado actual y la accion, y dentro segun la accion se utiliza un 
// switch que aplica la logica segun la accion y el dato a modificar, es importante saber que esta funcion siempre debe retornar
// algo asi que ponemos que por default retorne el mismo estado que recibio, luego en los botones o acciones que desencadenen
// el dispatcher, le pasan por parametro un objeto que contenga type: 'AccionARealizar' y tambien el valor que queramos asignar
// al estado en caso de que este no salga de un calculo, es importante tambien en el reducer no olvidarse de mezclar el estado
// actual con la modificacion que vamos a hacer mediante el operador spread.
// dispatch({ type: 'INCREMENT', title: 'algo' })
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }

    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }

    default:
      return state
  }
}

const initialState = {
  count: 0,
  title: 'Hola'
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleTitle = (e) => {
    dispatch({
      type: 'SET_TITLE',
      title: e.target.value
    })
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleTitle}
        value={state.title}
      />
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <h1>
        { state.count } - { state.title }
      </h1>
    </div>
  )
}

export default App