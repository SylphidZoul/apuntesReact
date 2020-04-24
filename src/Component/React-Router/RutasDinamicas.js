import React from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'

// Para crear rutas dinamicas, debemos crear otra ruta que este anidada al principal, y despues del slash agregar dos puntos
// y el nombre de la subcategoria, en este ejemplo /productos/:categoria donde podriamos reemplazar categoria por hogar. Luego
// en el componente que es renderizado por esa ruta dinamica, le llega por props.match.params.categoria el nombre de la categoria
// a la que accedimos mediante el navegador, y con esto podemos generar algun tipo de logica para que el componente renderize los
// productos de esa categoria. Si queremos podemos tener mas parametros dinamicos, simplemente tenemos que seguir agregando /: y
// el nombre, por ejemplo /productos/:categoria/:id, pero si hacemos esto, nada en categoria se renderizara ya que no estamos pasando
// la ruta entera, por lo que podemos agregar un '?' al final para hacer el ultimo parametro opcional, quedaria de la siguiente manera
// /productos/:categoria/:id?, de este modo seguira renderizando en categoria.
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
    </nav>
  )
}

const RutasDinamicas = () => {
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
    </BrowserRouter>
  
  )
}
export default RutasDinamicas