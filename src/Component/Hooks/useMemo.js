import React, { useState, useMemo } from 'react'

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
        Hook useMemo
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

// useMemo es otra herramienta para optimizar que solo usaremos en caso de qe la aplicacion se vuelva lenta,
// este hook nos permite memorizar un componentes con distintas props en una constante y luego renderizarla en el marcado
// de esta manera el componente no se va a volver a renderizar o actualizar a menos que en las dependencias de useMemo pongamos
// alguna variable que habilite la actualizacion.
const SuperList = ({ list, log }) => {
  console.log('%cRender <SuperList /> ' + log, 'color: green')
  
  return (
    <ul>
      {list.map(item => (
        <li key={ item }>
          { item }
        </li>
      ))}
    </ul>
  )
}


const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const add = () => {
    setClicks(clicks + 1)
  }

  const memoList = useMemo(() => {
    return (
      <SuperList
        list={[ 1, 2, 11, 55, 88 ]}
        log='Memorizado'
      />
    )
  }, [])

  return (
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({ clicks })
      </button>

      <SuperList
        list={[ 'orange', 'pink', 'purple', 'yellow']}
        log='Normal'
      />

      { memoList }
    </div>
  )
}

export default App