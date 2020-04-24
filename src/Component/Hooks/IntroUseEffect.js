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

// El hook useEffect nos permite emular los metodos de ciclo de vida que tienen los componentes de clases, con este hook
// el equipo de React trata de simplicar los efectos que ocurrian dentro de esos metodos. Los efectos son cualquier cosa 
// que no se maneja o se gestiona dentro de React, como EventListeners, alguna llamada a apisRest, una subscripcion, o una api
// nativa como es la geolocalizacion. useEffect emula a componentDidMount, componentDidUpdate, y componentWillUnmount.
// El hook useEffect recibe por primer parametro una funcion, que en este caso por conveniencia es una arrow function donde se
// van a emular los primeros 2 metodos anteriormente mencionados, luego si hacemos que esta arrow function retorne otra 
// funcion, aca es donde va a emular a componentWillUnmount, aunque con sus diferencias, ya que este ultimo se ejecuta antes
// de actualizar el componente con nuevo state.

const App = () => {
  const [ clicks, setClicks ] = useState(0)

  useEffect(() => {
    // componentDidMount
    // componentDidUpdate
    console.log('Dentro de useEffect', clicks)
    console.log('%c------------------------', 'color: green')
    
    return () => {
      // componentWillUnmount
      console.log('Return de useEffect', clicks)
    }
  })

  const add = () => setClicks(clicks + 1)

  return (  
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}

export default App