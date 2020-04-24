import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import './Slide.css'

const Slides = ({images, interval}) => {
  
  const [ activeIndex, setActiveIndex ] = useState(0)

  // Ejemplo de como crear un intervalo, se iguala una const tick a la funcion setInterval que recibe por primer parametro la funcion
  // a ejecutar y por segundo parametro el tiempo de cada cuanto la ejecuta, dentro de la funcion que recibe va la logica que queremos
  // hacer en cada intervalo. Le decimos que mientras activeIndex sea menor que el tamaño de la array de fotos, que le vaya sumando 1
  // en cada intervalo, y que cuando deje de ser menor, vuelva a 0, de esta manera vamos recorriendo el array una y otra vez.
  useEffect(() => {
    const tick = setInterval(() => {
      if (activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
      else {
        setActiveIndex(0)
      }
      
    }, interval)

    return () => clearInterval(tick)
  }, [activeIndex, images.length, interval])
  

  return(
    <div className='Slide'>
      {/*Iteramos la array de imagenes y en el className le decimos que si el index de este item de la array es el que esta 
      activo en el intervalo, que le agregue ciertos estilos para poder mostrarlo delante. */}
      <div className='Slide_Container'>
        {images.map((image, index) => (
          <img
            src={image.src}
            alt={image.title}
            key={image.src}
            className={
              index === activeIndex 
              ? 'Slide_Container_Image animaShow'
              : 'Slide_Container_Image animaHide'
            }
          />
        ))}
        <div className='Slide_Container_Title'>
          {images[activeIndex].title}
        </div>
      </div> 
    </div>
  )

}
// Aplicamos default props en el caso qe no recibir props, podamos visualizar el componente de todas maneras
Slides.defaultProps = {
  interval: 2000,
  images: [
    {
      src: 'https://images.pexels.com/photos/3068107/pexels-photo-3068107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Women s Black Halter-top Close-up'
    },
    {
      src: 'https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'White and Brown House'
    },
    {
      src: 'https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Cars on Road Between High Rise Buildings'
    },
    {
      src: 'https://images.pexels.com/photos/3583568/pexels-photo-3583568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Aerial Photography of High-rise Buildings at Night'
    }
  ]
  
}
// Estos propTypes se aseguran que images sea una array de objetos
// y que a su vez estos objetos contengan las propiedades src y title.
Slides.propTypes = {
  interval: propTypes.number,
  images: propTypes.arrayOf(
    propTypes.shape({
      src: propTypes.string.isRequired,
      title: propTypes.string.isRequired
    })
  )
}
export default Slides