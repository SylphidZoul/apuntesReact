import React, { useState } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`
// Asignamos un valor mediante un boton de toggle y un operador ternario para que cambie de color en caso de que sea true o false;
const Button = styled.button`
  padding: 0.6em 1.5em;
  background: ${(props) => props.active ? 'purple' : 'black'};
  border-radius: 0.1em;
  color: #FFF;
  border: 0;
  margin: 0.4em;
`

const App = () => {
  const [ active, setActive ] = useState(false)

  const toggle = () => setActive(!active)

  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Button>
        Un Boton
      </Button>
      <Button onClick={toggle} active={active}>
        Toggle
      </Button>
    </div>
  )
}

export default App