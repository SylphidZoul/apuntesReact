import React, { Component } from 'react'

class App extends Component {
  state = {
    users: [],
    cargando: true
  }
// Las solicitudes HTTP se hacen en el componentDidMount, acá utilizamos el metodo nativo fetch, que recibe por parametros la url
// de la que vendra la info, luego nos devuelve una promesa que recibe de parametros una arrow function, donde esta arrow recibe de 
// parametro la respuesta del servidor pero en formato crudo que no podemos leer, por lo que la parseamos con el metodo .json()
// que tambien nos retornara otra promesa con el resultado parseado, con el cual acá ya manejamos los datos como queramos, en este caso
// los vamos a cargar al state donde tenemos una array users vacia.
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users, cargando: false }))
      .catch(error => {
        // Manejo del error
      })
  }
// Tambien es muy importante en las solicitudes realizar una verificacion con un state booleano, que se asegure de que la informacion
// llego de la api antes de renderizarla, en caso contrario, un archivo como una imagen que puede tardar mas en llegar
// tiraria un error al tratar de renderizar un <img> con valor undefined.
  render () {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }

    return (
      <div>
        <h1>Peticion HTTP</h1>
        <h2>{ this.state.text }</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              { user.name }
              <a href={`http://${user.website}`}>    {/*Al poner solo user.website, el enlace nos quiere mandar a un sitio dentro */}
                Website                              {/*de nuestro server, por lo que tenemos qe concatenar el http y luego la website */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App