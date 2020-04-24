import React, { Component } from 'react'

// El metodo render, es el tercer metodo que se ejecuta luego del constructor, getDerivedStateFromProps en la etapa
// de montaje, y en el caso de una etapa actualizacion, luego del shouldComponentUpdate.
// En este metodo es donde se aplica toda la logica de lo que se va a montar y de lo que no, podemos mezclar etiquetas normales
// con nuestros componentes de la manera que quedamos, tambien podemos usar condicionales para ir alternando las cosas a mostrar.
// Tambien se puede llamar a funciones que retornen marcado, o tambien constantes como lista que tambien contengan marcado.
// Esta prohibido llamar al metodo setState dentro del render y al metodo forceUpdate ya que pueden desatar un bucle infinito.
// Podemos retornar arrays con <li> que obviamente requieren una propkey, strings, nulls para qe no renderize nada y podemos ir
// jugando con todas las posibilidades.

const lista = (
  <ul>
    <li>Fresa</li>
    <li>Sandia</li>
    <li>Mango</li>
    <li>Melon</li>
  </ul>
)

class App extends Component {
  render () {
    if (false) {
      return null
    }

    return (
      <h1>{lista}</h1>
    )
  }
}

export default App