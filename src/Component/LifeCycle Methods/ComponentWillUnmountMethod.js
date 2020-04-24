import React, { Component } from 'react'

// El metodo componentWillUnmount se ejecuta al desmontar el componente, sirve para limpiar intervalos, event listeners, y ejecutar
// alguna funcion desde el padre. Siempre antes de desmontar un componente hay qe hacer las limpiezas o vamos a tener fugas de memoria
// porque un componente qe ya no existe intenta usar recursos.

class Timer extends Component {
  state = {
    time: 0,
    isPlaying: true
  }

  tick = null

  componentDidMount () {
    this.play()
  }

  componentWillUnmount () {
    // Limpiar intervals
    // Limpiar event listeners
    // Ejecutar algun metodo para que
    // limpie algo de el padre
    this.props.onDestoy()
    clearInterval(this.tick)
  }

  play = () => {
    this.setState({ isPlaying: true })

    this.tick = setInterval(() => {
      this.setState(state => ({
        time: state.time + 1
      }))
    }, 1000)
  }


  pause = () => {
    this.setState({ isPlaying: false })
    clearInterval(this.tick)
  }


  toggle = () => {
    if (this.state.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }
  
  render () {
    const { time, isPlaying } = this.state

    return (
      <div>
        <h1>{ time }</h1>
        <button onClick={this.toggle}>
          { isPlaying ? 'pause' : 'play' }
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    mostrar: true,
    message: ''
  }

  desmontar = () => {
    this.setState({ mostrar: false })
  }

  handleDestroy = () => {
    this.setState({
      message: 'El componente contador fue destruido'
    })
  }

  render () {
    return (
      <div>
        <h3>{ this.state.message }</h3>
        <button onClick={this.desmontar}>
          Desmontar
        </button>
        { this.state.mostrar && <Timer onDestoy={this.handleDestroy} /> }
      </div>
    )
  }
}

export default App