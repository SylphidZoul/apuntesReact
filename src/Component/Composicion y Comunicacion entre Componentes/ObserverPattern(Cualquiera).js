import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// Mediante este metodo podemos usar librerias como pubsub-js, eventEmitter, o MicroEvents.js, Sirven para tener comunicacion
// entre componentes sin importar en que rama o nivel esten, para utilizarlo, importamos la libreria luego de instalarla,
// y desde el componente que queremos realizar la comunicacion creamos un evento con PubSub en el emisor usando PubSub.Publish()
// donde por primer parametro va a recibir el nombre del evento personalizado que queramos, y por segundo parametro
// va a recibir la data que queramos pasar al otro componente, y desde el componente receptor en su componentDidMount
// se ejecuta la funcion PubSub.subscribe() que recibe por primer parametro el evento personalizado que se quiere recibir
// y por segundo parametro una arrow function que a su vez recibe como parametrosel objeto del evento y la data que llega
// para hacer lo qe se quiera como un setState, es importante que limpiemos los eventos en el componentWillUnmount con la 
// funcion PubSub.unsubscribe() pasandole de parametro el nombre del evento que queramos dejar de escuchar.

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
        Observer Pattern
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

  componentDidMount () {
    PubSub.subscribe('otro evento', (e, data) => {
      this.setState({
        message: data.title
      })
    })
  }

  componentWillUnmount () {
    PubSub.unsubscribe('otro evento')
  }

  handleClick = () => {
    PubSub.publish('saludo', 'Hola desde el Bisnieto')
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
    PubSub.subscribe('saludo', (e, data) => {
      alert(data)
    })
  }

  handleClick = () => {
    PubSub.publish('otro evento', {
      title: 'Hola desde <App />'
    })
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