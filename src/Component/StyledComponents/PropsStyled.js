import React from 'react'
import styled from 'styled-components'


const Header = styled.header`
  background: pink;
  text-align: center;
  color: #FFF;
  border-radius: 0.2em;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
  `
  //Para pasarle valores por medio de props, debemos inyectar una arrowfunction que reciba por parametros las props y retorne
  //el nombre de la prop que contiene el valor deseado y en caso de que no la tenga, debemos darle un valor por defecto como 'black'
const Button = styled.button`
  padding: 0.6em 1.5em;
  background: ${(props) => props.bg || 'black'};
  border-radius: 0.1em;
  color: #FFF;
  border: 0;
  margin: 0.4em;`
  

const PropsStyled = () => {

  return (
    <div>
      <Header>
        <h1>
          StyledProps
        </h1>
      </Header>
      <Button bg='red'>
        un Boton
      </Button>
      <Button>
        Toggle
      </Button>
    </div>
  )
}

export default PropsStyled