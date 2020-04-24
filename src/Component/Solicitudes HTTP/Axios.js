import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }
//El metodo fetch es nativo de window.fetch, pero los navegadores viejos no lo soportan, si vas a dar soporte a navegadores antiguos
// tendras que usar librerias como Axios.


  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    //Axios devuelve la respuesta ya parseada, por lo que no necesitamos la promesa con el .json(), y a su vez tambien en su funcion
    //axios.get por primer parametro recibe la url de la api, y por segundo una propiedad params que es un objeto donde recibe los
    //parametros como por ejemplo, los de busqueda con &t= {title} o parametros como cuantos resultados mostrar por pagina.
    axios.get(url, {
      params: {
        t: title
      }
    })
      .then(res => this.setState({
        movie: res.data,
        isFetching: false
    }))
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