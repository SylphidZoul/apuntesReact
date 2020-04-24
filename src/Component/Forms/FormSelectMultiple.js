import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class App extends Component {
  state = {
    techs: [ 'Vue' ]
  }

  handleChange = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value                          // Para convertir la lista Select en multiple, tenemos que poner un atributo
    )                                                   // multiple como true en el select, el state del componente debera pasar a ser
                                                        // una array para poder almacenar las distintas opciones seleccionadas.
    this.setState({ techs })                            // Al handleChange llega del evento una coleccion de HTML que no se pueden
  }                                                     // guardar de esta manera, por lo que usamos la funcion Array.From para 
                                                        // convertir esa coleccion en una array y luego extraemos el value
  render () {                                           // de cada option para obtener una array con los strings de cada una de 
    return (                                            // las opciones seleccionadas, luego usamos setState con el nuevo array
      <div>                                             {/* que creamos con las opciones seleccionadas. ACLARACION: Arrat.from() */}
        <h1>                                            {/*puede recibir de segundo parametro un mapeo o cualquier transformacion */}
          Etiqueta Select <Unicorn />                   {/*de datos. Luego con las techs seleccionadas hacemos un mapeado de los */}
        </h1>                                           {/*items en el renderizado */}
        <form>
          <select
            value={this.state.techs}                  
            onChange={this.handleChange}
            multiple
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              { tech }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App