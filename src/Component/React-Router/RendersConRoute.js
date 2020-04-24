import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// La diferencia entre component y render, es que cuando usamos componente, ReactRouter internamente utiliza react.create.element
// por ende si le pasamos una arrowfunction con el marcado dentro funciona gracias al create.element. Por lo que cada vez que se 
// genere un nuevo renderizado se va a volver a crear esa arrowfunction, por lo que la gente de react nos recomienda que si queremos
// renderizar una arrow function que retorne marcado, que lo hagamos con la prop render. La tercera forma es atraves de la prop
// children, es decir:
//                    <Route path='/productos'>
//                      <Productos />
//                    </Route>
// Dentro del children tambien podemos poner entre llaves una arrowfunction que retorne un marcado o un componente. Esta arrow function
// puede recibir las props. Otra caracteristica es que el componente o marcado children, se va a renderizar no importa en que ruta
// estemos. En las props nos llega un objetos con distinta informacion acerca de las rutas, que podemos usar para nuestro beneficio
// como en el caso de abajo, la prop match que es un booleano que define si la ruta es la del componente o no, entonces sino es su ruta
// decimos que nos renderize null.

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = () => (
  <h1>Home</h1>
)

const RendersRoute = () => {
  return (
    <BrowserRouter>
      <Route 
        path='/'
        exact 
        component={Home} />
      <Route 
        path='/hola'
        render={Hola}/>
      <Route path='/productos'>
        {({match}) => {
          if (!match) return null
          return (
            <Productos />
          )
        }}
      </Route>
    </BrowserRouter>
  
  )
}
export default RendersRoute