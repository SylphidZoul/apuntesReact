import React, { Component } from 'react'

// Render props es una comunicacion avanzada que pasa datos desde componentes hijos a padres. Se utiliza para intentar hacer a los
// componentes hijos mas reutilizables, concretamente una render prop es una prop que recibe una función que un componente utiliza 
// para saber qué renderizar.
// Se usa para almacenar alguna logica y state en un componente, y que luego el componente padre segun como necesite esa logica pueda decirle
// que renderizar aplicando esa logica y ese state, por ejemplo hacer un componente mouse, que tenga la logica de guardar la posicion
// del mouse en el state, y luego desde el renderprop aprovechar esa logica para decirle que renderize una foto de un gato siguiendo
// la posicion del mouse, o un brillito que deje de estela el mouse, o que simplemente renderize las coordenadas.
// En el ejemplo de este ejercicio, simplemente se le esta pidiendo al hijo que haga un mapeo de una list prop, y que en caso de que
// haya una renderprop, devuelva un data.name data.price por cada iteracion, en caso contrario que itere la lista de las props de manera
// normal, un ejemplo bastante confuso.

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Render Props
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class List extends Component {
  render () {
    const { list, render } = this.props

    return (
      <div>
        {list.map((item, index) => {

          if (render) {
            return render(item, index)
          }

          return (
            <li key={item.name}>
              { item.name }
            </li>
          )
        })}
      </div>
    )
  }
}

class App extends Component {
  state = {
    fruits: [
      { name: 'Fresa', price: 22 },
      { name: 'Mango', price: 18 },
      { name: 'Sandia', price: 24 },
      { name: 'Manzana', price: 12 },
    ]
  }

  render () {
    const { fruits } = this.state
    return (
      <div style={boxStyles}>
        <Header />
        <List
          list={fruits}
          render={(data, index) => (
            <div>
              {data.name} - ${data.price}
            </div>
          )}
        />
      </div>
    )
  }
}

export default App