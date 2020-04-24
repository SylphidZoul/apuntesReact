import React, { useState, useContext } from 'react'

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
        Hook useContext
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

// { Provider, Consumer }
const MyContext = React.createContext()

// Consumir context de forma tradicional
// const Nieto = () => (
//   <MyContext.Consumer>
//     {(context) => (
//       <div>
//         <p>Nieto {context.num}</p>
//         <button onClick={context.addNum}>
//           Nieto Dispatcher
//         </button>
//       </div>
//     )}
//   </MyContext.Consumer>
// )

// El hook useContext se usa de manera igual que el context tradicional con la diferencia de que el provider puede recibir los datos
// simplemente declarando una constante que haga una destructuracion de los datos recibidos del useContext(MyContext) y luego
// retornar el marcado normal.

const Nieto = () => {
  const { num, addNum } = useContext(MyContext)
  
  return (
    <div>
      <p>Nieto {num}</p>
      <button onClick={addNum}>
        Nieto Dispatcher
      </button>
    </div>
  )
}


const Hijo = () => (
  <div>
    <p>Hijo</p>
    <Nieto />
  </div>
)

const App = () => {
  const [ num, setNum ] = useState(0)

  const addNum = () => setNum(num + 1)

  return (
    <MyContext.Provider value={{
      num,
      addNum
    }}>
      <div>
        <Header />
        <button onClick={addNum}>
          App ( {num} )
        </button>
        <Hijo />
      </div>
    </MyContext.Provider>
  )
}

export default App