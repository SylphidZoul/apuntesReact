import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }
  // Async y Await se usan para escribir un codigo asincrono de forma que parezca sincrono, evitando el uso de promesas o de callbacks
  // Para usar esta sintaxis en un bloque, en el caso de una funcion, debemos anteponer justo antes de la declaracion de la funcion
  // la palabra async, al momento de hacer la solicitud la guardamos en una constante con la palabra await antes de la funcion fetch
  // luego creamos otra constante que va a ser igual a la const que tiene la respuesta del fetch pero tambien con el await y el .json()
  // de esta manera solo queda cargar la ultima constante al estado.
  // Como se puede apreciar, el codigo queda mas simple así.
  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    const res = await fetch(url + '&t=' + title)
    const movie = await res.json()

    this.setState({
      movie,
      isFetching: false
    })
  }

  render () {
    const { movie, isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Nombre de Pelicula'
          />
          <button>
            Buscar
          </button>
        </form>
        {isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
          <div>
            <h1>{ movie.Title }</h1>
            <p>
              { movie.Plot }
            </p>
            <img
              src={ movie.Poster }
              alt='Poster'
              style={{
                width: '150px'
              }}  
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App