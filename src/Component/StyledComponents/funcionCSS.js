import React from 'react'
import styled, { css } from 'styled-components'

const Header = styled.header`
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`
//La funcion Css se antepone de los templatestring y se utiliza para crear componentes muy dinamicos en temas de props,
// declaramos una constante con el estilo a ser dinamico, le antepones css y en el valor de la propiedad inyectamos una funcion
// que con las props retorna el valor a cambiar que viene de las props y por defecto lo que queramos, luego en el styled component
// al momento de declarar ese valor dinamico inyectamos otra funcion que desde las props retorne que si existe la prop primary 
// entonces aplique los estilos de la constante con la propiedad dinamica.
const primaryStyles = css`
  border: ${props => `2px solid ${props.borderColor || 'green'}`};
`

const Button = styled.button`
  padding: 1em 2em;
  margin: 1em;
  ${props => props.primary && primaryStyles}
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Button primary borderColor='orange'>
        Dispara
      </Button>

      <Button primary>
        Green
      </Button>
    </div>
  )
}

export default App