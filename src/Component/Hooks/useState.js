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
// Los hooks son funciones que nos permiten utilizar componentes funcionales como si fueran componentes de clases, añadiendoles
// states, ciclos de vida y muchas mas funcionalidades que antiguamente no tenian y solo eran componentes estaticos.
// En este ejemplo vemos useState, que se inicia declarando una const y se iguala a useState(EL VALOR INICIAL) que puede ser
// cualquier tipo de dato incluso arrays y objetos, esta funcion nos va a devolver una array que en la primera posicion tiene
// el valor del estado, y en la segunda posicion una funcion que emula el setState para retocar el valor de la primera posicion.
// Se recomienda hacer una destructuracion al declarar la constante, poniendole el nombre que queramos tanto al estado, como a la 
// funcion que retoca el estado, en este caso clicks y setClicks, esta ultima funcion se utiliza igual qe setState.
// Los hooks siempre deben ser definidos dentro del cuerpo de la funcion, no pueden estar dentro de un condicional o de otra funcion.

// Los hooks hacen que el codigo sean mas sencillo y deberiamos aplicarlos a todos los proyectos que se armen desde 0.

const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  return (
    <div>
      <Header />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}

// class App extends Component {
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state
//     return (
//       <div>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </div>
//     )
//   }
// }

export default App