import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(movie => this.setState({ movie, isFetching: false }))
  }
//En este ejemplo agregamos toques visuales al buscador, haciendo que mientras se consulta la api, solo muestre un mensaje
//de cargando, mediante el state isFetching, y al buscar otra pelicula cuando ya tengamos una cargada, hacemos que tambien
//desaparezcan los datos mientras se pone el mensaje de cargando.
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