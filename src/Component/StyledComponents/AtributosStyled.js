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
`
// Ejemplo de como controlar los atributos de un input mediante styledcomponents, para hacerlo le agregamos un .attrs que recibe como 
// parametro una arrowfunction que a su vez recibe props, y esta arrow function retorna un objeto los distintos atributos y sus valores
// pueden ser datos qe vengan desde las props o valores por defecto. Luego de la funcion abrimos los templatestring y agregamos estilos.
const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder || 'Ingresa el Texto',
  type: props.type || 'text'
}))`
  padding: 1em;
  border: 1px solid blue;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Input />
      <Input placeholder='Tu cerveza favorita 🍺' />

    </div>
  )
}

export default App