import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoContolado extends Component {                 // Tomamos el ejemplo de un Input No controlado usando Form, y le aplicamos
  handleSubmit = (event) => {                               // sus respectivos labels, y usando la propiedad htmlFor de los labels
    event.preventDefault()                                  // podemos lograr que al hacer clicks en ellos, estos pongan focus
    const nombre = event.target[0].value                    // en sus respectivos textbox
    const email = event.target[1].value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre:</label>
          <input
            type="text"
            placeholder='Nombre'
            id='name'
          />
        </p>
        <p>
          <label>Email:</label>
          <input
            type="text"
            placeholder='Email'
          />
        </p>
        <button>
          Enviar
        </button>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Atributo ref <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App