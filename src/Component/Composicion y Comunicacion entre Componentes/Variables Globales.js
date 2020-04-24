import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// Este comunicacion consta de usar variables globales como lo haciamos en javascript, se desaconseja su uso y solo serviria
// en casos de probar pequeñas cosas en un proyecto que no va a llegar a produccion asi. hacemos qe los distintos botones
// le den un valor distinto a la variable y qe tambien setteen el state con esa variable, pero genera mucho comportamiento 
// no deseado.

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
        ( Cualquiera )
      </div>
      <div style={subtitleStyles}>
        Variables Globales
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

class Bisnieto extends Component {
  state = {
    message: '*******'
  }

  handleClick = () => {
    this.setState({
      message: window.title
    })
  }

  render () {
    return (
      <div style={boxStyles}>
        <p>{ this.state.message }</p>
        <button onClick={this.handleClick}>
          NIETO
        </button>
      </div>
    )
  }
}

class Nieto extends Component {
  render () {
    return (
      <div style={boxStyles}>
        <Bisnieto />
      </div>
    )
  }
}

class Hijo extends Component {
  render () {
    return (
      <div style={boxStyles}>
        <Nieto />
      </div>
    )
  }
}

class App extends Component {
  componentDidMount () {
    window.title = 'React Es Cool!!'
  }

  handleClick = () => {
    window.title = '##########'
  }

  render () {
    return (
      <div style={boxStyles}>
        <button onClick={this.handleClick}>
          PADRE
        </button>
        <Header />
        <Hijo />
      </div>
    )
  }
}

export default App