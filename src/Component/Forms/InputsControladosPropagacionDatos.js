import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InputControlado extends Component {                   // Esto sirve para que podamos pasar los datos verificados a un componente
  state = {                                                 // padre y hacer al componente reutilizable. Lo logramos dandole un name
    text: '',                                               // a cada instancia del componente, de paso le ponemos un placeholder
    color: '#E8E8E8'                                        // distinto a cada uno, luego cuando pasamos el valor del texto desde
  }                                                         // el componente hijo mediante el evento personalizado onChange, le pasamos
                                                            // tambien el props.name para que sepa que instancia esta cambiando de valor
  actualizar = (event) => {                                 // Luego en la funcion del componente padre hacemos que le lleguen como
    const text = event.target.value                         // parametros el name y el texto de la instancia del componente hijo
    let color = 'green'                                     // para actualizar con setState el nombre del tipo de dato y el valor del 
                                                            // dato.
    if (text.trim() === '') {
      color = '#E8E8E8'
    }

    if (text.trim() !== '' && text.length < 5) {
      color = 'red'
    }

    this.setState({ text, color })

    // Propagando datos al padre
    this.props.onChange(this.props.name, text)
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
        placeholder={this.props.placeholder}
      />
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: ''
  }
  // esto llega desde el evento personalizado onChange
  actualizar = (name, text) => {
    this.setState({
      [name]: text
    })
  }
  
  render () {
    return (
      <div>
        <h1>Input Controlado <Unicorn /></h1>
        <InputControlado
          onChange={this.actualizar}
          placeholder='Nombre Completo'
          name='name'
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder='Tu Email'
          name='email'
        />
        <h2>
          Nombre: { this.state.name }
        </h2>
        <h2>
          Email: { this.state.email }
        </h2>
      </div>
    )
  }
}

export default App