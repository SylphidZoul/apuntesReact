import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>  
    🦄
  </span>
)                                                                         // Ejemplo de como usar un select dentro de un formulario
                                                                          // con sus respectivas opciones, con selected value= 
class App extends Component {                                             // podemos hacer que sea la opcion seleccionada por default
  state = {                                                               // Aunque tambien se hace poniendo value a la etiqueta
    tech: 'Vue'                                                           // select. Se pueden cargan al state mediante el evento
  }                                                                       // onChange y accediendo al event.target.value

  handleChange = (event) => {
    this.setState({
      tech: event.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
          { this.state.tech }
        </h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App