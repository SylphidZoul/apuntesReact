import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// En react, si usamos los <a> para generar links, estos nos van a recargar la pagina cada vez que vayamos navegando entre los links
// que resulta en un comportamiento que va contra las norma general de React, por lo que React nos da sus propios componentes Links
// para evitar este comportamiento. Link se usa exactamente igual que los A, pero el href es sustituido por un "to". Por defecto
// Link va a cargar en nuestro historial cada ruta por la que vayamos pasando, y podremos ir para atras o para adelante con las 
// flechas del navegador, si queremos evitar este comportamiento tenemos la prop REPLACE que si la tenemos como true, va a reemplazar
// la ultima ruta que teniamos en el historial de navegacion, por ejemplo si navegamos desde home -> hola -> productos, al tener 
// replace cuando estemos en productos y toquemos atras, iremos a home sin pasar por hola. Tambien la prop To puede recibir entre
// llaves un objeto, dentro de este podemos poner el pathname osea la ruta, search que es los parametros de busqueda, el hash que se
// usa para redireccionar dentro de la misma pagina sin recargar hacia un elemento, y un state, donde le podemos mandar info que van
// a llegar desde las props al componente que este renderizando esa ruta.
const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = (props) => {
  console.log(props.location.state)
  return(
  <h1>Home</h1>
)}
const navStyles = {
  display: 'flex',
  justifyContent: 'space-evenly'
}
const Navigation = () => {
  return (
    <nav style={navStyles}>
      <Link to={{
        pathname: '/',
        search: '?ordenar=nombre',
        hash: '#hash-otro',
        state: {
          nombre: 'NINJA pro',
          age: 25
        }
        }}
          >Home
      </Link>
      <Link to='/hola'>Hola</Link>
      <Link to='/productos'>Productos</Link>
    </nav>
  )
}

const CompLink = () => {
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
        render={Productos}/>
    </BrowserRouter>
  
  )
}
export default CompLink