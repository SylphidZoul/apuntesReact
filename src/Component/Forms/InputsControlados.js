import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InputControlado extends Component {                     // En un input controlado podemos darle cambio de color al inputbox
  state = {                                                   // a medida que el usuario vaya llenando con sus datos para hacerle
    text: '',                                                 // saber si los datos estan correctamente ingresados.
    color: '#E8E8E8'                                          // La funcion .trim() elimina los espacios en blanco de un string
  }                                                           // a ambos lados. Iniciamos las propiedad text igualandola al value
                                                              // del textbox, para que el textbox siempre muestre el estado actual
  actualizar = (event) => {                                   // de text, acto seguido agregamos el evento onChange al texbox que va 
    const text = event.target.value                           // a llamar una funcion que le llega por parametro el objeto del evento
    let color = 'green'                                       // e igualamos una const al value del textbox, luego declaramos una var
                                                              // color la cual estara por defecto en green, luego hacemos las 
    if (text.trim() === '') {                                 // verificaciones, si el value es un string vacia cambiamos color a gris
      color = '#E8E8E8'                                       // si value es distinto a una cadena vacia y tiene menos de 5 letras
    }                                                         // el color sera rojo, por ultimo hacemos el setState actualizando el 
                                                              // text y el color, de este modo conseguimos el comportamiento deseado.
    if (text.trim() !== '' && text.length < 5) {
      color = 'red'
    }

    this.setState({ text, color })
  }

  render () {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    return (
      <input
        type='text'
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>Input Controlado <Unicorn /></h1>
        <InputControlado />
      </div>
    )
  }
}

export default App