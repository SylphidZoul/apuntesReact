import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './Redirect.css'

// El component Redirect sirve como su nombre lo dice, nos redirecciona automaticamente, lo podemos usar aplicando logica, en este
// ejemplo lo usamos para si alguien qe quiere entrar a su perfil y no esta logueado, lo redireccione al login, como Link, tambien
// puede tener un objeto en la prop to, para enviar informacion dentro de un state, en este ejemplo al state lo renderizamos tras
// redireccionar, tambien sirve si le ponemos el from para cada vez que entremos a la url del from, se redirrecione a la de to.

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='active'>Login</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)
const isAuth = false

const Perfil = () => {
  return isAuth 
    ? <h2>Bienvenido a tu perfil</h2>
    : <Redirect to={{
      pathname: './login',
      state: {
        message: 'Debes Loguearte!'
      }
    }} />
}
const Login = ({location}) => {
  console.log(location)
  if (location.state) {
    return <h2>{location.state.message}</h2>
  }
  return(
    <div>
      <h1>Login</h1>

    </div>
    
  )
}
const Redirecct = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/login' render={Login} />
      <Route path='/perfil' render={Perfil} />
      <Redirect from='/p' to='/perfil' />
    </BrowserRouter>
  )
}

export default Redirecct