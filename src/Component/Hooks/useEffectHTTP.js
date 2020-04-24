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
// ejemplo de una solicitud a una apiRest con un componente funcional, nada que explicar, solo repaso de sintaxis
const App = () => {
  const [ users, setUsers ] = useState([])
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setFetching(false)
      })
  }, [])

  return (  
    <div>
      <Header />
      { isFetching && <h1>Cargando...</h1> }
      <ul>
        { users.map(user => (
          <li key={user.id}>
            { user.name }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App