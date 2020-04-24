import React, { Component } from 'react'

// En este ejemplo extendemos los HOCS para poder pasarle parametros de configuracion en casos como que queramos que este contador
// arranque desde x numero y no desde 0, lo logramos pasandole la configuracion dentro de un objeto como segundo parametro al envolver
// el componente con el hook, y lo recibimos en la logica del HOC como segundo parametro, en este objeto podemos pasarle valores
// para que los ponga con setState, o valores para agregar en logicas de funciones. Tambien se puede pasar la configuracion
// haciendo una doble ejecucion, osea withCounter(App)("segunda ejecucion") y al momento de hacer llegar la configuracion, cambiamos
// del HOC el retorno de la clase por un retorno de una funcion que le llegan por parametros la configuracion y esta funcion es la que
// retorna la clase.

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
  return (config) => class extends Component {
    state = {
      num: config.clicks
    }

    add = () => {
      this.setState(state => ({
        num: state.num + config.sumClicks
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

export default withCounter(App)({
  clicks: 5,
  sumClicks: 5
})