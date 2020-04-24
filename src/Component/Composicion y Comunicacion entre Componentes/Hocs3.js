import React, { Component } from 'react'

// En este ejemplo creamos un HOC que contenga la logica del ancho y el alto de la ventana del navegador, y de esa manera devuelva
// al componente principal props de la informacion del tamaño de la ventana actual, para mostrarla en pantalla.

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

const withSizes = (Comp) => class extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)    
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  render () {
    const { width, height } = this.state

    return (
      <Comp
        width={width}
        height={height}
      />
    )
  }
}

class App extends Component {
  render () {
    const { width, height } = this.props 

    return (
      <div style={boxStyles}>
        <Header />
        <h1>
          { width } - { height }
        </h1>
      </div>
    )
  }
}

export default withSizes(App)