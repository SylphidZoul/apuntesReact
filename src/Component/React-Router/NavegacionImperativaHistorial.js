import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

// Con navegacion imperativo nos referimos a lo contrario de lo declarativo, mientras navlink es declarativo, ya que en el fondo
// hace todo automaticamente, algo imperativo es que le vamos añadiendo nosotros los pasos, aca creamos botones para poder movernos
// por el historial gracias al objeto history que nos dan los route, tenemos varios metodos interesantes para usar, el que no 
// deje anotado es el push, que empuja al historial la ruta que queramos.

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='active'>Ninja</NavLink>
    <NavLink to='/videos' activeClassName='active'>Videos</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)

const Ninja = () => (
  <h1>Ninja</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const NavegacionImperativa = ({ history }) => {
  console.log(history)

  return (
    <div>
      <button onClick={history.goBack}>
        Atras
      </button>
      <button onClick={history.goForward}>
        Adelante
      </button>
      <button onClick={() => {
        history.go(-2)
      }}>
        Go 2
      </button>
      <button onClick={() => {
        history.replace('/ninja')
      }}>
        GO NINJA
      </button>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route render={NavegacionImperativa} />
      <Route path='/' exact render={Home} />
      <Route path='/ninja' render={Ninja} />
      <Route path='/videos' render={Videos} />
    </BrowserRouter>
  )
}

export default App