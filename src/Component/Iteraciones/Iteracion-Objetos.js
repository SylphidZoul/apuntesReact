import React, { Component } from 'react'

class App extends Component {
  state = {
    user: {
      name: 'Gerardo Gallegos',
      country: 'Mexico',
      twitter: '@luxfenix',
      youtube: 'tecs.ninja'
    }
  }

  render () {
    const { user } = this.state
    const keys = Object.keys(user)                  // Object.key extrae el nombre de todas las propiedades de un objeto y las guarda
    // => [ 'name', 'country', 'twitter' ]             en una nueva array como se muestra abajo

    return (
      <div>
        <h3>Iterando propiedades de objetos</h3>
        <ul>
          {keys.map(key => (
            <li>
              <strong>{ key }:</strong> { user[key] }         {/* En este linea renderiza el valor de la propiedad usando user[key]*/}
            </li>                                             // Seria como que le este dando user['name'], despues user['country']
          ))}                                                 {/*Lo que va a terminar devolviendo el valor que tiene esa propiedad y no su nombre*/}
        </ul>
      </div>
    )
  }
}

export default App