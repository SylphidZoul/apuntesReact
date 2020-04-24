import React, { Component } from 'react'

const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
))

class App extends Component {
  entrada = React.createRef()
                                                            // En el caso de que necesitemos tener una ref en el componente padre
  componentDidMount () {                                    // de un elemento en el componente hijo funcional, envolvemos al hijo
    console.log(this.entrada)                               // con el React.forwardRef que aparte de recibir props, recibe la ref
  }                                                         // de esta manera al elemento del hijo le pasamos directamente la ref
                                                            // como ref={ref} y asi queda no tirara ningun error
  render () {

    return (
      <div>
        <FancyInput ref={this.entrada} />
      </div>
    )
  }
}

export default App