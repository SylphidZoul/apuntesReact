import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const Reveal = () => {

  //Ejemplo de librerias con componentes que animan nuestros elementos
  return (
    <div>
      <Bounce>
        <section>
          <h3>Ejemplo de Titulo</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, minus sunt! Ipsum rerum deserunt minus possimus vero necessitatibus cupiditate non placeat, odio ab esse officiis cumque, nobis sit tempora eaque!</p>
        </section>
      </Bounce>
      <Zoom>
        <section>
          <h3>Ejemplo de Titulo</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, minus sunt! Ipsum rerum deserunt minus possimus vero necessitatibus cupiditate non placeat, odio ab esse officiis cumque, nobis sit tempora eaque!</p>
        </section>
      </Zoom>
      <section>
        <h3>Ejemplo de Titulo</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, minus sunt! Ipsum rerum deserunt minus possimus vero necessitatibus cupiditate non placeat, odio ab esse officiis cumque, nobis sit tempora eaque!</p>
      </section>
    </div>
  )
}
export default Reveal