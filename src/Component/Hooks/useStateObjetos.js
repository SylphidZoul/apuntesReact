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
        Hook useState
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

// En componentes de clase el uso de setState, va mezclando y combinando las previas propiedades del estado, con las nuevas 
// actualizaciones del estado, de manera que si hacemos setState a la propiedad clicks, este por defecto mezcla los nuevos clicks
// con la propiedad title que no tocamos del estado anterior, pero en el hook useState, esto no pasa asi, si inciamos un objeto
// con varias propiedades y luego solo modificamos una sin especificar sobre la otra, este la va a borrar reemplazando el viejo estado
// con varias propiedades por el nuevo estado con la unica propiedad que modificamos, por lo que tenemos que mezclar los estados 
// manualmente con el spreadoperator, donde mezclamos el estado viejo con el nuevo estado con la modificacion, si esto se nos hace
// muy repetitivo para los manejadores que modifican las distintas propiedades, podemos crear una funcion mezcladora o merge
// que le lleguen por parametro el nextState o la modificacion al estado, y este mezcle ambos estados, de esta manera con los 
// distintos manejadores llamamos a esta funcion pasandole por parametro la modificacion a mezclar.
// Aunque el equipo de React nos desaconseja usar objetos en useState y que tengamos distintos useState para cada propiedad
// y de esta manera tener mas sencillo el codigo.

const App = () => {
  const [ state, setState ] = useState({
    clicks: 0,
    title: ''
  })

  const merge = (nextState) => {
    setState({
      ...state,
      ...nextState
    })
  }

  const addClicks = () => {
    merge({
      clicks: state.clicks + 1
    })
  }

  const handleInput = (e) => {
    const title = e.target.value

    merge({
      title
    })
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={state.title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        Clicks ({ state.clicks })
      </button>
      <h3>{ state.title }</h3>
    </div>
  )
}

export default App