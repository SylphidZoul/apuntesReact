import React, { useState, useEffect } from 'react'
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

const Button = styled.button`
  padding: 0.6em 1.5em;
  background: ${(props) => props.active ? 'purple' : 'black'};
  border-radius: 0.1em;
  color: #FFF;
  border: 0;
  margin: 0.4em;
`
// Esta es la manera para estilizar nuevos componentes extendiendo de otros, como un boton especial.
const ButtonSpecial = styled(Button)`
color: gray;
transition: all 300ms ease-out;

&:hover {
  transform: scale(1.3);
}`


//Para estilizar componentes de react propios o de terceros, debemos destructurar la prop className y inyectarsela al elemento
//que queremos que tome el estilo posteriormente declarado, en este caso se lo estamos inyectando al Div en su className, de no
//pasar esas props, no va a funcionar, los estilos debemos declararlos luego de que el componente es declarado. 
const Move = ({className}) => {

  const [ mouseX, setMouseX ] = useState(0)

  const handleMove = (e) => setMouseX(e.clientX)

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return(
    <div className={className}>
      Move Component * {mouseX}
    </div>
  )
}
// Aca es donde despues de tener declarado el componente Move, extendemos un nuevo componente MoveStyled que contiene 2 propiedades
// nuevas.
const MoveStyled = styled(Move)`
background: yellow;
font-size: 30px;`

const Extender = () => {


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
      <ButtonSpecial>
        Special
      </ButtonSpecial>
      <MoveStyled />
    </div>
  )
}

export default Extender