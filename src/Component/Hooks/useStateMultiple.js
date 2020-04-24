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
// Adaptacion de useStateObjetos a 2 useStates separados que nos demuestra que utilizar varios hooks en vez de objetos, simplica el
// codigo y lo hace mas facil de manejar.
const App = () => {
  const [ clicks, setClicks ] = useState(50)
  const [ title, setTitle ] = useState('Hook useState')

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
      <h3>{ title }</h3>
    </div>
  )
}

export default App