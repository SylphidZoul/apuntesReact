import React from 'react'
import styled, { keyframes } from 'styled-components'


const Header = styled.header`
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`
// Ejemplo de como aplicar animaciones, en este caso en un hover, nada que aportar, es bastante facil e intuitivo.
const pulse = keyframes`
  0% {
    transform: scale(1);
    background: gray;
    color: #000;
  }

  50% {
    transform: scale(1.3);
    background: purple;
    color: #FFF;
  }

  100% {
    transform: scale(1);
    background: gray;
    color: #000;
  }
`

const Button = styled.button`
  padding: 1em 2.5em;
  margin: 1em;

  &:hover {
    animation: ${pulse} 2s ease-in-out;
  }
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Button>
        Boton
      </Button>
    </div>
  )
}

export default App