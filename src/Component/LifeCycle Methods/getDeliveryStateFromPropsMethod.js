import React, { Component } from 'react'

class Contador extends Component {
  state = {
    num: this.props.num
  }

  // El metodo getDerivedStateFromProps es el segundo metodo que se ejecuta en la fase de montaje, y el primero en la fase
  // de actualizacion. Su nombre es totalmente descriptivo, se utiliza para entregar informacion al state que provengan de las props
  // En muy raras situaciones vamos a tener que usar este metodo. Este metodo se declara con el static delante para evitar
  // que podamos acceder al contexto de this y utilizar setState y otros, ya qe esto causa problemas, por lo que siempre va a 
  // retornar un objeto que se va a mezclar con el state que tenemos. Este metodo recibe las nextProps que son las props nuevas que
  // nos llegaron del padre, y el prevState del componente.
  // En este ejemplo queremos lograr un contador de clicks en un componente hijo, que a su vez actualize sus clicks desde un input
  // box en el padre, esto solo lo vamos a lograr 

  static getDerivedStateFromProps (nextProps, prevState) {
    // if (prevState.num !== nextProps.num) {
    //   return {
    //     num: nextProps.num
    //   }
    // } Esta logica no sirve ya que si intentamos cambiar el state dando clicks, la condicion siempre va a dar verdadera y va
    // a volver a ajustar el state en el numero que tenga desde las props, por ejemplo si hacemos ingresamos 20, el state se 
    // pone en 20 y anteriormente era 0, da true y ahora el state es 20, pero si damos click en el boton, el state va a ser 21
    // y al compararlo con el nextprops que sigue siendo 20, siempre va a dar distinto y va a volver a setear el state en 20

    if (prevState.num < nextProps.num) {
      return {
        num: nextProps.num
      }
    }
    // aca lo solucionamos diciendo que si 21 es menor que 20, cosa que va a dar falso, no va a volver a settear el state en 20, pero
    // si pasamos ahora en las props, 30, se va a comparar con 21 < 30, va a dar true, y ahi recien va a setear el state con las props.
  }

  add = () => {
    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render () {
    const { num } = this.state

    return (
      <div>
        <hr />
        <button onClick={this.add}>
          Clicks ( { num } )
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    numero: 0
  }

  handleChange = (e) => {
    let numero = parseInt(e.target.value)

    if (isNaN(numero)) {
      numero = 0
    }

    this.setState({ numero })
  }

  render () {
    const { numero } = this.state
    return (
      <div>
        <h3>getDerivedStateFromProps</h3>
        <h2>{ numero }</h2>
        <input type="text" onChange={this.handleChange}/>
        <Contador
          num={numero}
        />
      </div>
    )
  }
}

export default App