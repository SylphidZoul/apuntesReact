import React from 'react'
import styled from 'styled-components'
import {colorPrincipal } from './Color'

// Todos los componentes de styled deben ser guardados dentro de constantes. Declaramos el nombre del componente, lo igualamos a styled
// . etiqueta html que va a representar y seguido template strings donde pondremos todos los estilos como si se tratara de una hoja css
// normal y corriente. Podemos usar variables traidas desde una hoja css, importarlas y usarlas dentro de los templateString, podemos
// declarar una constante acá mismo y poner el valor y luego inyectarlo o directamente valor+propiedad.

// Variable con Propiedad y valor
const paddingBasico = 'padding: 0.3em;'

//Podemos crear funciones que reciban parametros para crear cualquier estilo o animacion.
const getLinearGradient = (rot, color1, color2) => {
  return `background: linear-gradient(${rot}, ${color1}, ${color2});`
}

const Header = styled.header`
  ${getLinearGradient('50deg', 'blue', 'red')}
  text-align: center;
  color: ${colorPrincipal};
  border-radius: 0.2em;
  ${paddingBasico}
  margin: 0.3em;
  font-size: 14px;
  transition: opacity 350ms ease;

  &:hover {
    opacity: 0.3;

    h1 {
      color: black;
    }
  }
  
  h1 {
    color: pink;
  }
  span {
    background: #000;
  }
  .Big {
    font-size: 20px;
  }`

// Si necesitamos cambiar algun componente como un h1 o un span anidado, en vez de crear un nuevo componente hacemos lo de arriba,
// Tambien podemos usar className en los elementos anidados y modificarlos dentro del mismo styled padre. Podemos usar
// las pseudoclases si las declaramos con un &:pseudoclase y dentro de las pseudoclases afectar a los hijos como el h1 
  

const Sintaxis = () => {

  return (
    <div>
      <Header>
        <h1>
          Sintaxis
        </h1>
        <span>+</span>
        <div className='Big'>Ejemplo</div>
      </Header>
    </div>
  )
}

export default Sintaxis