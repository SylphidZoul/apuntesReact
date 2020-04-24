import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Switch se usa para renderizar solo el primer componente que coincide con la ruta, en este caso seria Video, tambien sirve para
// agregar un componente que se renderize cuando la ruta no existe y es ingresada manualmente.

const Home = () => (<h1>Home</h1>)
const Videos = () => (<h1>Videos</h1>)
const Playlist = () => (<h1>Playlist</h1>)

const Switchh = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={Home} />
        <Route path='/videos' render={Videos} />
        <Route path='/videos' render={Playlist} />
      </Switch> 
    </BrowserRouter>
  )
}
export default Switchh