import React, { Component } from 'react'

// El metodo componentDidMount se va a ejecutar una sola vez para cada componente al finalizar la etapa de montaje,
// Se utiliza generalmente para hacer solicitudes HTTP que necesitemos al iniciar el componente o agregar eventListeners.
// Aca tenemos 2 ejemplos de una peticion a una api, y luego un mapeo del resultado en el render
// y despues un un EventListener de tipo resize para almacenar el ancho de la ventana en un state y renderizarlo luego.

class Http extends Component {
  state = {
    photos: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(photos => this.setState({ photos }))
  }
  
  render () {
    const { photos } = this.state
    return (
      <div>
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.thumbnailUrl}
            alt={photo.title}
          />
        ))}
      </div>
    )
  }
}

class Events extends Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount () {
    window.addEventListener('resize', this.handlerResize)
  }

  handlerResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render () {
    return (
      <div>
        <h2>Events { this.state.width }</h2>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount () {
    // Solicitudes HTTP
    // Agregar Event Listeners
  }

  render () {
    return (
      <div>
        <h1>componentDidMount</h1>
        <Events />
        <Http />
      </div>
    )
  }
}

export default App