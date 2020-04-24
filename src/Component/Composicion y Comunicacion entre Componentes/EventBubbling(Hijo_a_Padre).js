import React, { Component } from 'react'

// El event Bubbling juega con el objeto de evento, que se propaga desde el componente que se creo hasta los componentes de mas arriba
// a menos que se le especifique e.stopPropagation(), de esta manera, desde el componente que lanzamos el evento, accedemos a las
// propiedades del evento y le agregamos la informacion que queramos pasar como e.saludo = 'Hola Mensaje desde el Hijo', luego
// desde el componente que queramos recibir la informacion, accedemos a e.saludo y hacemos con los datos lo que queramos.
// Esta forma de comunicacion se considera mala practica y hay formas mas optimas de realizar una comunicacion.
// Puede que encontremos en librerias de terceros esta practica y sabiendo como funciona, tengamos la capacidad de mejorarlo.

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
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Event Bubbling
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

class Hijo extends Component {
  handleClick = (e) => {
    // e.stopPropagation()
    e.saludo = 'Hola Mensaje desde el Hijo'
    console.log('Click en <Hijo />')
  }
  
  render () {
    return (
      <div
        style={boxStyles}
        onClick={this.handleClick}  
      >
        <p>Hijo</p>
      </div>
    )
  }
}

class App extends Component {
  handleClick = (e) => {
    console.log('Click en <Padre />   ', e.saludo)
  }

  render () {
    return (
      <div
        style={boxStyles}
        onClick={this.handleClick}  
      >
        <Header />
        <Hijo />
      </div>
    )
  }
}

export default App