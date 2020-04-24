import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Si ponemos un componente en la URL raiz '/', al momento de cambiar de ruta, este componente se nos va a renderizar ya que esta 
// cumpliendo la URL tambien son su ruta raiz, para evitar esto debemos poner la prop EXACT en true, o simplemente declararla.
// Este comportamiento tambien sucede cuando tenemos rutas anidadas. Por ejempo /hola/ninja, donde tambien se va a renderizar
// el componente Hola. Otra prop que tenemos disponible es la STRICT, que solo nos va a renderizar el componente si la URL es exacta
// osea si el componente Hola estaria en /Hola/ con una barra al final, y en el navegador sale /Hola sin la barra al final, no lo 
// renderizara. Y la ultima es la prop SENSITIVE, que nos hara case sensitive las rutas.

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = () => (
  <h1>Home</h1>
)

const PropsDeRoute = () => {
  return (
    <BrowserRouter>
      <Route 
        path='/'
        exact 
        component={Home} />
      <Route 
        path='/hola'
        component={Hola}/>
      <Route 
        path='/productos'
        component={Productos}/>
    </BrowserRouter>
  
  )
}
export default PropsDeRoute