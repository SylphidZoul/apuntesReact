import React, { Component } from 'react'

// Esto es para poder agregarle un evento a un mapeo de objetos
// no puede mandar datos asi no mas dentro del mapeo a la funcion
// por lo que tiene que usar bind que por primer parametro recibe el this
// y por segundo parametro recibe el item del mapeo
//y de ese modo funciona

class App extends Component {
  state = {
    fruits: [
      { name: 'Fresa', price: 5.4 },
      { name: 'Manzana', price: 2.3 },
      { name: 'Sandia', price: 1.2 },
      { name: 'Guayaba', price: 5 },
      { name: 'Pera', price: 4.12 },
      { name: 'Kiwi', price: 3.87 },
      { name: 'Limon', price: 7.21 },
      { name: 'Melon', price: 6.21 },
      { name: 'Cereza', price: 4.98 }
    ],

    frutaSeleccionada: {}
  }

  select = (frutaSeleccionada, event) => {
    this.setState({
      frutaSeleccionada
    })
  }

  render () {
    const { fruits, frutaSeleccionada } = this.state

    return (
      <ul>
        {fruits.map(fruit => (
          <li
            key={fruit.name}
            onClick={this.select.bind(this, fruit)}
            style={{
              color: frutaSeleccionada.name === fruit.name
                ? 'red'
                : '#000'
            }}
          >
            { fruit.name } - $ { fruit.price }
          </li>
        ))}
      </ul>
    )
  }
}

export default App