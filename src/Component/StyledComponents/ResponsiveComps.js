import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;

  @media (max-width: 700px) {
    background: #000;
    font-size: 20px;

    h1 {
      color: yellow;
    }
  }
`
//Los media query se utilizan para cambiar los estilos dependiendo
//de la resolucion que tenga el viewport, en otras palabras para
//adaptar nuestra pagina a los distintos dispositivos, se utiliza como arriba.

const Responsive = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>
    </div>
  )
}
export default Responsive