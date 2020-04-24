import React, { useState } from 'react'
import './Carrousel.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types'

const Carrousel = ({images}) => {
  const [ activeIndex, setActiveIndex ] = useState(0)

  //Generamos la logica de que cuando esta al comienzo, salte al final, y que cuando esta al final, salte al comienzo
  const left = () => {
    if(activeIndex > 0){
       setActiveIndex(activeIndex - 1)
     }
     else {
       setActiveIndex(images.length - 1)
     }
  }
  const right = () => {
    if(activeIndex < images.length - 1){
     setActiveIndex(activeIndex + 1)
    }
    else {
      setActiveIndex(0)
    }
  }
  // Ejemplo de usar Transition Group para hacer un efecto bonito de carrousel de imagenes, el mayor trabajo esta en CSS
  return(
    <div className="Carrousel">
      <div className='Carrousel_Buttons'>
        <button onClick={left}>Atras</button>
        <button onClick={right}>Siguiente</button>
      </div>
      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          classNames='Slide'
          key={activeIndex}
          >
          <img src={images[activeIndex]} alt='titulo' className='Carrousel_Img'/>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
Carrousel.defaultProps = {
  images: []
}

Carrousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.string
  )
}

export default Carrousel