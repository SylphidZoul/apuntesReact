import React, { Component } from 'react'

//Creamos un boton con el que simularemos un error, iniciamos un state dispararError en false, al boton del render hacemos que 
//llame a un evento llamado dispatchError, que va a setear el estado de dispararError en true, luego hacemos un condicional en el 
//Render que pregunte si dispararError es true, throw new Error('Mensaje que queramos de error')
class Boton extends Component {                                                     
  state = {
    dispararError: false
  }

  dispatchError = () => {
    this.setState({ dispararError: true })
  }

  render () {

    if (this.state.dispararError) {
      throw new Error('Lo siento he fallado 🔥🔥🔥')
    }

    return (
      <button onClick={this.dispatchError}>
        Boton con Bugg
      </button>
    )
  }
}

//componentDidcatch limita y maneja errores, tambien muestra distintas vistas alternativas en caso de un error en el cliente
//Se puede agregar componentDidCatch a cualquier componente de clase, pero es buena idea crear un unico componente que limite
//y maneje los errores de las otros componentes reutilizandolo, el componentDidCatch solo se ejecutara si detecta un error en 
//cualquier parte de su rama, por lo que inicializamos un estado de tieneError en falso, y en caso de que componentDidMount
//se active, que setee el tieneError en true, de esta manera en el render realizamos un condicional con ese estado de error
//si es verdadero, podemos crear ahi nuestra vista y mensaje alternativo, si es falso, que directamente retorne todos sus children.
// Luego en el componente padre, envolvemos cara rama con el nuevo componente LimiteErrores, y en caso de qe alguna rama de error
// solo se dejara de ejecutar esa y no el resto de la aplicacion.
class LimiteErrores extends Component {
  state = {
    tieneError: false
  }
// Al componentDidCatch le llegan de parametros el error, y de donde ocurrio el error, eso lo podemos usar luego para mostrar en el
// renderizado, prestar atencion como se agrega al state ese error qe llega desde los parametros.
  componentDidCatch (error, errorInfo) {
    this.setState({
      tieneError: true,
      error
    })
  }


  render () {

    if (this.state.tieneError) {
      return (
        <div>
          Wops! Algo ha salido mal puedes recargar o contactar con el equipo de soporte ♥~
          <div style={{ color: 'orangered' }}>
            { this.state.error && this.state.error.toString() }
          </div>
        </div>
      )
    }

    return this.props.children
  }
}



class App extends Component {
  render () {
    return (
      <div>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
      </div>
    )
  }
}
export default App