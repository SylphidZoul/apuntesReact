import React, { Component } from 'react'

class Entrada extends Component {                       // Una ref es guardar en una constante un elemento del html como es un input
  entrada = React.createRef()                           // box, se hace declarando el nombre de la constante e igualandola a la funcion
                                                        // React.createRef, luego en el elemento html que se le quiera dar la ref
  componentDidMount () {                                // ponemos de prop ref= y le pasamos el nombre de la constante del ref
    this.focus()                                        // luego podemos manipular por codigo las distintas propiedades de ese elemento
  }

  focus = () => {
    this.entrada.current.focus()
  }

  blur = () => {
    this.entrada.current.blur()
  }

  render () {
    return (
      <div>
        <h1>React refs </h1>
        <input
          type="text"
          ref={this.entrada}
        />
        <button onClick={this.focus}>
          Focus
        </button>
        <button onClick={this.blur}>
          Blur
        </button>
      </div>
    )
  }
}

class App extends Component {

  render () {

    return (
      <div>
        <Entrada />
      </div>
    )
  }
}

export default App