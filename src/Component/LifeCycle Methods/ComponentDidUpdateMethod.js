import React, { Component } from 'react'

// ComponentDIdUpdate es el ultimo metodo que se ejecuta en la fase de actualizacion, el componente se actualiza cada vez que
// llegan nuevas props, un setState o un forceUpdate()
// Desde componentDidUpdate se puede llamar a cualquiera de los metodos de actualizacion, ya sea al setState o al forceUpdate()
// pero tenemos que tener cuidado ya que sino generamos alguna condicion, podemos desatar un bucle infinito.
// Este componente trae informacion de usuarios desde una api,
// Esta api envia la informacion segun le pongamos user/1, user/2, etc. En este ejemplo ese numero va a llegar desde las props de
// la forma que mas nos guste, aca va a ser un boton que cuenta los clicks y ese state lo pasa por props al componente UserDetails.
// Hacemos una funcion con la peticion fetch donde terminamos guardando la respuesta en el state que iniciamos como un objeto vacio
// luego en el componentDidMount hacemos que esta funcion se ejecute ya que el numero de id siempre llega como 1 al principio desde
// las props, renderizamos este objeto usando JSON.Strinify(state, null, espacios en blanco de identacion)
// Luego para que con cada mutacion de la prop.id nos actualize la informacion de la pagina con el usuario correspondiente a ese ID
// usamos el metodo componentDidUpdate, que le llegan las prevProps y el prevState antes de que el componente se haya actualizado
// con esto podemos crear condicionales para decidir cuando se va a ejecutar el codigo dentro de el, en este caso comparamos
// Si el userID de las propsPrevias, es distinto de el userID de las props postActualizacion, entonces que vuelva a llamar
// a la funcion de solicitud para que renueve la informacion con el nuevo prop.userID.
// Luego usamos el clasico booleano para mostrar un mensaje de carga mientras la solicitud se resuelve.

class UserDetails extends Component {
  state = {
    user: {},
    isFetching: false
  }

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchData()
    }
  }

  fetchData = () => {
    this.setState({
      isFetching: true
    })

    const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId
    fetch(URL)
      .then(res => res.json())
      .then(user => this.setState({
        user,
        isFetching: false
      }))
  }

  render () {
    return (
      <div>
        <h2>User Details</h2>
        { this.state.isFetching 
          ? <h1>Cargando...</h1>
          : (
            <pre>
              { JSON.stringify(this.state.user, null, 4 ) }
            </pre>
          )
        }
      </div>
    )
  }
}

class App extends Component {
  state = {
    id: 1
  }

  aumentar = () => {
    this.setState(state => ({
      id: state.id + 1
    }))
  }

  render () {
    const { id } = this.state
    return (
      <div>
        <h1>componentDidUpdate</h1>
        <h2>ID: { id }</h2>
        <button onClick={this.aumentar}>
          Aumentar
        </button>
        <UserDetails
          userId={id}
        />
      </div>
    )
  }
}

export default App