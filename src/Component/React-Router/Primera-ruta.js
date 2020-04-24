import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Lo primero que debemos hacer es importar BrowserRouter y Route, para poder hacer que funcione, debemos envolver todas nuestras rutas
// con BrowserRouter lo mas arriba de la aplicacion que podamos. Al componente Route se la pasa una prop llamada path que contrenda la
// URL dentro de un string, la segunda prop es component, donde debemos ponerle que componente queremos que se renderize cuando estemos
// en esa URL. Si declaramos una ruta dentro de otras etiquetas, el componente se montara dentro de esa etiqueta. Tambien podemos tener
// varias rutas que utilizen la misma url con el mismo o distintos componentes.

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)

const PrimeraRuta = () => {
  return (
    <BrowserRouter>
      <Route 
        path='/hola'
        component={Hola}/>
      <section>
        <Route 
          path='/productos'
          component={Productos}/>
      </section>
      <div>
        <Route 
          path='/productos'
          component={Productos}/>
      </div>
    </BrowserRouter>
  
  )
}
export default PrimeraRuta