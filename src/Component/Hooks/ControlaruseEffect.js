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

// En este ejemplo creamos un contador de clicks clasicos, y otro boton que alterna entre 2 emojis, y jugamos con el useEffect para
// ver cuando se ejecuta y cuando no.
// Esto se logra pasandole al useEffect por segundo parametro una array, dependiendo que contenga la array es como va ir ejecutandose
// Si no tiene segundo parametro, se ejecutara siempre que se monte y haya una actualizacion, si tiene un array vacio como parametro
// entonces solo se ejecutara una vez en el montaje, pero no en las actualizaciones. Y si tiene una variable, aparte de dispararse
// en el montaje, tambien se dispara cuando el valor de esa variable cambie, por lo qe tambien podemos poner todas las variables
// que queramos dentro, y cada vez que cualquiera cambie, el useEffect se va a disparar.

const App = () => {
  const [ num, setNum ] = useState(0)
  const [ emoji, setEmoji ] = useState('🦁')

  useEffect(() => {
    alert('useEffect 🎇')
  }, [ emoji, num ])

  const addNum = () => setNum(num + 1)
  
  const toggleEmoji = () => {
    const nextEmoji = emoji === '🦁' ? '🙊' : '🦁'
    setEmoji(nextEmoji)
  }

  return (  
    <div>
      <Header />
      <button onClick={addNum}>
        ADD ( { num } )
      </button>
      <button onClick={toggleEmoji}>
        Alternar Emoji
      </button>
      <h1>
        { emoji }
      </h1>
    </div>
  )
}

export default App