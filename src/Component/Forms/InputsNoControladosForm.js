import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄                                                   
  </span>                                                 // Los inputs no controlados tienen la ventaja de que son codigo sencillo
)                                                         // y tienen un acercamiento al html mas tradicional, pero su desventaja
                                                          // es que no tenemos control de los datos hasta que el usuario da al submit
class InpuntNoContolado extends Component {               // por lo que si queremos ir validando a medida de que los inputs vayan 
  handleSubmit = (event) => {                             // cambiando, deberemos usar Inputs Controlados.
    event.preventDefault()
    const nombre = event.target[0].value                  // Esta es la forma basica de manejar formularios usando Forms, el form
    const email = event.target[1].value                   // dispara un evento llamado onSubmit cuando se le da click al ultimo
                                                          // boton del formulario o al boton type submit, llamamos a la funcion 
    // Manejo de datos                                    // y le pasamos por parametros el objeto del evento, luego cargamos en 
    this.props.onSend({ nombre, email })                  // constantes los valores de los input, estos estan en event.target[num]
  }                                                       // donde num es el orden que tienen dentro del formulario como si fuera una
                                                          // array, luego se pasa de igual manera al componente padre mediante un 
  render () {                                             // un evento personalizado. event.preventDefault() desactiva que el evento
    return (                                              // onSubmit reinicie la pagina como lo hace por default. y Value es el valor
      <form onSubmit={this.handleSubmit}>                 {/*del textbox y no del elemento en si */}
        <input
          type="text"
          placeholder='Nombre'
        />
        <input
          type="text"
          placeholder='Email'
        />
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
          Inputs No controlados Formularios <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App