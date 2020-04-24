import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './NavLink.css'

// NavLink es una version del componente Link, pero nos ofrece algunas otras props que nos pueden ser utiles al utilizar menus
// de navegacion. Una de estas props es activeStyle, que nos deja pasarle un objeto con estilos en linea, estos estilos se van
// a aplicar cuando la ruta de este link este activa. De manera similar que pasaba con Route, nuestra ruta raiz va a tener estos
// estilos aplicados siempre por mas que no estemos ahi, por lo que acá tambien podemos pasarle la prop exact.
// Tambien tenemos la prop activeClassName para darle cierta clase cuando estemos en esa ruta para resaltar aun mas.
// Existe tambien la prop isActive que recibe entre llaves una arrowfunction que debe retornar true o false dependiendo si
// queremos que el link este activo o no en tema de estilos, si es false a pesar de que estemos en su ruta, no va a tomar los estilos
// y si es true, por mas que no estemos en su ruta va a tener estilos de activo, esta funcion recibe por parametros a Match y Location
// y con estos 2 items podemos generar alguna logica para decidir si estara activo o no. En este ejemplo hacemos que solo este activo
// cuando le pasamos vamos a la ruta /producto seguido de /cualquiercosa, de otro modo no estara activo.

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = () => (
  <h1>Home</h1>
)
const navStyles = {
  display: 'flex',
  justifyContent: 'space-evenly'
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
        activeClassName='navActive'
        >
          Hola
      </NavLink>
      <NavLink
        to='/productos' 
        activeStyle={navActive}
        isActive={(match, location) => {
          if(!match) return false

          return !match.isExact
        }}
        >
          Productos
      </NavLink>
    </nav>
  )
}

const NavvLink = () => {
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
        path='/productos/:id?'
        render={Productos}/>
    </BrowserRouter>
  
  )
}
export default NavvLink