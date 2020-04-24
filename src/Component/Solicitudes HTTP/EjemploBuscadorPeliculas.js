import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {}
  }
//En este ejemplo hacemos un buscador de peliculas, donde la solicitud Fetch la vamos a necesitas cuando el usuario de click
//en el boton buscar, por lo que la realizamos en su respectivo event, cargamos la url de la api en una const para hacerlo mas legible
//acto seguido en la solicitud concatenamos la url base, con el &t= de esa pagina que represante el buscador, y luego
//el titulo de la pelicula qe extrajimos previamente del textbox, de esta manera la api nos devolvera justo lo que estamos buscando
//y luego realizamos las promesas correspondientes

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(movie => this.setState({ movie }))
  }

  render () {
    const { movie } = this.state
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
      </div>
    )
  }
}

export default App