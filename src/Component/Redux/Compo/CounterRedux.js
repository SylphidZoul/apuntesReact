import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../Store2'

const Counter = (props) => {
  // const plus = () => props.dispatch(increment())
  // const minus = () => props.dispatch(decrement())

  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <h1>{props.count}</h1>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}
// Para conectarlo debemos exportar el componente envuelvo del HOC connect, este se ejecuta 2 veces, en la primera ejecucion, debemos
// pasar una funcion que por convencion siempre debe llamarse mapStateToProps que recibe por parametro el state que llega desde el 
// store, esta funcion nos tiene que retornar un objeto, en este objeto tienen qe estar las distintas propiedades del estado, en
// este caso pasamos el estado entero ya que es un solo numero, pero si se tratara de un objeto, ponemos name: state.name y asi.
// En las props vamos a recibir este objeto que contiene Count y el 
// metodo dispatch para modificar el state. Podemos importar los creadores de acciones desde el store para modificar aca con el
// metodo dispatch.
// Por segundo parametro el connect recibe otra funcion llama MapDispatchToProps, que le brinda a las props metodos dispatch de
// distintos tipos para modificar el state. De este modo le pasamos esas nuevas funciones desde las props a los botones.
//
// const CounterConnected = connect(mapStateToProps)(Counter) => export default CounterConnected
export default connect(mapStateToProps, mapDispatchToProps)(Counter)