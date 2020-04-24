import React, { Component } from 'react'

// Un HOC(High Order Component) es una funcion que recibe de parametros un componente y este retorna un nuevo componente, es
// practicamente eso, este nuevo componente lo podemos crear con una clase anonima, osea que no tenga nombre, los HOCs sirven
// para añadir funciones y states a un componente, que le van a estar llegando desde las props, en este ejemplo, nuestro componente
// App esta vacio de logica y solo renderiza el valor de la prop num que le llega desde el HOC y un boton que dispara una funcion
// que tambien le llega mediante props del HOC, para lograr esto envolvimos en la exportacion de la aplicacion, a App con la funcion
// del HOC, en este caso withCounter(App). Importante saber que los HOCS se nombran con with+ El nombre de la accion o la logica que
// va a sumar al componente.
const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Hijo ←→ Padre )
      </div>
      <div style={subtitleStyles}>
        <span>
          HOC
        </span>
        <br/>
        <span>
          High Order Component 
        </span>
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'

}

// HOC
const withCounter = (Comp) => {
  return class extends Component {
    state = {
      num: 0
    }

    add = () => {
      this.setState(state => ({
        num: state.num + 1
      }))
    }

    render () {
      return (
        <Comp
          num={this.state.num}
          add={this.add}
        />
      )
    }
  }
}

class App extends Component {
  render () {
    const { num, add } = this.props

    console.log(this.props)
    return (
      <div style={boxStyles}>
        <Header />
        <h1>{ num }</h1>
        <button onClick={add}>
          ADD
        </button>
      </div>
    )
  }
}

export default withCounter(App)