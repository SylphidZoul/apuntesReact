import React, { Component } from 'react'

const users = [
  { id: 1, name: 'Gerado Gallegos', country: 'Mexico'},
  { id: 2, name: 'Leanne Graham', country: 'USA'},
  { id: 3, name: 'Ervin Howell', country: 'Colombia'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'España'}
]

class App extends Component {                             // El renderizado es una tarea costosa para los clientes, por lo que React
  render () {                                             // evita hacer renderizados innecesarios, por lo que en mapeos, necesita
    return (                                              // que le demos una key unica a cada item para poder renderizar unicamente
      <div>                                               {/*ese en caso de que cambie, por lo que debe ser un string unico que nunca */}
        <h1>Iterando</h1>                                 {/*se repita, por lo general las bases de datos nos entregan un id unico */}
        <ul>                                              {/*o tambien podriamos usar el index de la array mas el nombre en caso de */}
          {users.map((user, index) => (                   //no contar con un id como ultimo recurso, tampoco se recomienda el uso de 
            <li key={index + user.name}>                  {/*funciones ya que cambiaria con cada renderizado. Dar una Key es Required */}
              { user.name }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App