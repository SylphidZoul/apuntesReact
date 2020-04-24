import React, { Component } from 'react'

// Todos los componentes de clase que extends de React.Component, tienen un metodo constructor heredado aunque no lo especifiquemos
// que seria:
//            constructor (props) {
//              super(props)
//            }
// El constructor es el primer metodo que se ejecuta en la etapa de montaje, esto quiere decir que ni el marcado ha sido renderizado
// por lo que sirve para inicializar states con valores para ser usados en el render(), tambien nos ayuda para pasar el contexto
// de this a los metodos de clase usando la funcion bind(), tambien nos sirve para agregar REFS como en el caso del h2 con ref title
// Tambien podemos inicializar el state del componente con valores que vengan desde las props, como en este ejemplo, donde el estado
// inicial de state.num depende totalmente de props.num

// Una observacion importantisima es que si en algun momento las props desde el componente padre llegan a cambiar, al solo estar
// cargandose en el constructor del hijo, estas no se van a ver reflejadas hasta que el componente se vuelva a montar de 0.
// Tambien es obligatorio que el metodo constructor reciba props y a su vez su primera linea sea super(props), de lo contrario
// podriamos tener errores.
// El constructor por supuesto se puede obviar, usando el state y las refs como inicializadores de propiedad como siempre lo hacemos
// y el bind de la funcion se puede evitar convirtiendo el metodo de clase en una arrow function ya que las arrows heredan
// el contexto del this de su padre, por lo que this. nunca va a apuntar a la propia funcion.


class Contador extends Component {
  constructor (props) {
    super(props)

    // Pasar el contexto a los metodos de clase
    this.agregar = this.agregar.bind(this)
    
    // Crear Refs para acceso al elemento en el DOM
    this.title = React.createRef()

    // Inicializar el estado
    this.state = {
      num: props.num
    }
  }

  agregar () {
    console.log(this.title)

    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render () {
    return (
      <div>
        <h2
          ref={this.title}
        >
          { this.state.message }
        </h2>
        <button onClick={this.agregar}>
          Click ( { this.state.num } )
        </button>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>Metodo constructor</h1>
        <Contador num={1200} />
        <Contador num={20} />
      </div>
    )
  }
}

export default App