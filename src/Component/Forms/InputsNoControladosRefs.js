import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoContolado extends Component {
  nombre = React.createRef()
  email = React.createRef()
                                                                //Esta es la forma basica de extraer datos de un formulario
  handleClick = () => {                                         //CON REFS de un componente hijo y mandarlas a un componente padre
    const nombre = this.nombre.current.value                    // mediante eventos personalizados
    const email = this.email.current.value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <div>
        <input
          type="text"
          ref={this.nombre}
          placeholder='Nombre'
        />
        <input
          type="text"
          ref={this.email}
          placeholder='Email'
        />
        <button onClick={this.handleClick}>
          Enviar
        </button>
      </div>
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
          Inputs No controlados Refs <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App