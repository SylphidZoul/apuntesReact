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

// Acá extendemos el ejemplo anterior a un caso en donde el server en lugar de devolvernos una array, nos va a devolver un objeto.
// Por lo que lo configuramos en el hook en sus parametros, le decimos que el estado inicial qe va a tener llega por segundo parametro
// y que por defecto va a ser un array vacio, luego en el componente App le decimos que su initial state va a ser un objeto vacio y no
// una array. Completamos el ejemplo haciendo que con cada click aumente el id del objeto que queremos recibir y esto va a ir
// entregandonos diferentes users.

const useFetch = (url, initialState = []) => {
  const [ data, setData ] = useState(initialState)
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    setFetching(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFetching(false)
      })
  }, [ url ])

  return [
    data,
    isFetching
  ]

}

const App = () => {
  const [ clicks, setClicks ] = useState(1)
  const [ user, isLoading ] = useFetch('https://jsonplaceholder.typicode.com/users/' + clicks, {})

  const add = () => setClicks(clicks + 1)

  return (
    <div>
      <Header />
      { isLoading && <h1>Cargando...</h1> }
      <h1>{ user.name }</h1>
      <p>{ user.phone }</p>
      <button onClick={add}>
        Clicks ({ clicks })
      </button>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            { user.name }
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App