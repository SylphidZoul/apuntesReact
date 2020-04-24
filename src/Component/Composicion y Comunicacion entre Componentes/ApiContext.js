import React, { Component } from 'react'

// Este metodo de comunicacion es de los mas eficientes, primero hay qe crear el context, se hace declarandolo fuera de los componentes
// Este context nos va a devolver un objeto con 2 componentes de react llamados Provider y Consumer, podemos declararlo con el nombre 
// que queramos como const MyContext = React.createContext() o directamente aplicando destructuracion como en el caso de este ejemplo.
// Lo primero que tenemos qe hacer es usar el Provider en el componente de mas alto nivel o el componente principal, para usarlo
// envolvemos todo el marcado de ese componente con las etiquetas <Provider></Provider>, todos los componentes anidados dentro de
// estas etiquetas, van a tener acceso al contexto. Provider recibe una prop llamada value que sera el valor real del contexto
// teoricamente puede ser cualquier cosa, luego desde cualquier nivel de la rama que queramos acceder al contexto, debemos 
// envolver de nuevo todo el marcado entre el componente <Consumer></Consumer> pero en esta ocasion, Consumer recibe como primer hijo
// una funcion, y esa funcion es la que va a retornar el marcado qe teniamos previamente, dentro del parametro de esa funcion vamos
// a recibir el contexto, que es el valor que tenemos dentro de la propiedad value, de ahi lo inyectamos dentro del marcado de la 
// forma que necesitemos. De esta forma en este ejemplo, el nieto esta accediendo a un valor que no fue pasado por props ni que tampoco
// para por el componente hijo, como un tipo de comunicacion directa aislada. Dentro del context podemos pasarle objetos que contengan
// propiedades del state como asi tambien funciones que manejen el setState de ese mismo componente, haciendo que un componente nieto
// modifique el State de su abuelo. Es un metodo de comunicacion solamente de Padres a hijos, pero su utlizacion hace que los componentes
// sean mas dificiles de reutilizar.
// { Provider, Consumer }
const { Provider, Consumer } = React.createContext()

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Cualquiera )
      </div>
      <div style={subtitleStyles}>
        React API Context
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

const Nieto = () => (
  <Consumer>
    {({ addClicks, clicks }) => (
      <div style={boxStyles}>
        <p>Nieto</p>
        <button onClick={addClicks}>
          Disparar ( { clicks } )
        </button>
      </div>
    )}
  </Consumer>
)

class Hijo extends Component {
  render () {
    return (
      <div style={boxStyles}>
        <p>Hijo</p>
        <Nieto />
      </div>
    )
  }
}

class App extends Component {
  state = {
    clicks: 0
  }

  addClicks = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }

  render () {
    return (
      <Provider value={{
        clicks: this.state.clicks,
        addClicks: this.addClicks
      }}>
        <div style={boxStyles}>
          <Header />
          <Hijo />
        </div>
      </Provider>
    )
  }
}

export default App