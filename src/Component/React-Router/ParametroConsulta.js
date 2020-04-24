import React from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import queryString from 'query-string'

// Los parametros de consulta o queryString se definen en la URL colocando un '?' al final de este, seguido de nuestro parametro de 
// busqueda, en este caso color, seguido de un =, y el valor de este color, podemos agregar mas parametros poniendo el '&' seguido
// de la siguiente parametro y su valor. Estos nos llegan dentro de las props, en props.location.search, para extraer esta informacion
// creamos una constante query qe va a ser igual a un nuevo URLSearchParams que recibe por parametro la prop search, y luego creamos
// las distintas constantes qe van a guardar cada propiedad como color y talle, y las igualamos a query.get(propiedad), y luego
// podemos usar esta info como queramos. Este es el metodo nativo de Javascript. Acá usamos una libreria de terceros llamada 
// Querystring, que con su metodo parse que recibe las props, nos devuelve directamente un objeto que podemos inyectar sus valores
// en el marcado.

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <div>
    <h1>Productos</h1>
    <Link to='/productos/gamers'>Gamers</Link>
    <Link to='/productos/hogar'>Hogar</Link>
  </div>
)
const Home = () => (
  <h1>Home</h1>
)
const navStyles = {
  display: 'flex',
  justifyContent: 'space-evenly'
}
const ProductosCategorias = ({match}) => {
  return (
    <div>
      <h1>Categoria: {match.params.categoria}</h1>
        {match.params.id && <p>ID: {match.params.id}</p> }
    </div>
  )
}
const Ropa = (props) => {
  
  // const query= new URLSearchParams(props.location.search)
  // const color= query.get('color')
  // const talla= query.get('talla')
  const query= queryString.parse(props.location.search)
  console.log(query)

  return (
    <div>
      <h1>Ropa</h1>
      <div>
        Color: {query.color}
        <br/>
        Talla: {query.talla}
      </div>
    </div>
  )
}

const navActive = {
  color: 'orangered'
}
const Navigation = () => {
  return (
    <nav style={navStyles}>
      <NavLink 
        to='/' 
        exact activeStyle={navActive}
        >
          Home
      </NavLink>
      <NavLink
        to='/hola' 
        activeStyle={navActive}
        >
          Hola
      </NavLink>
      <NavLink
        to='/productos' 
        activeStyle={navActive}
        >
          Productos
      </NavLink>
      <NavLink
        to='/ropa'
        activeStyle={navActive}>
          Ropa
      </NavLink>
    </nav>
  )
}

const Consulta = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route 
        path='/'
        exact 
        render={Home} />
      <Route 
        path='/hola'
        render={Hola}/>
      <Route 
        path='/productos'
        exact
        render={Productos}/>
      <Route 
        path='/productos/:categoria/:id?'
        render={ProductosCategorias}/>
      <Route
        path='/ropa'
        render={Ropa}/>
    </BrowserRouter>
  
  )
}
export default Consulta