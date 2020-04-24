import React from 'react'
import Acordion from './Acordion2'

// Ejercicio donde aplicamos muchos conocimientos aprendidos y aprendemos a hacer un componente acordion reutilizable con animaciones
// suaves y dinamicas
const App5 = () => {
  return(
    <div>
      <Acordion
      title='Ejemplo de Acordion'
      content='Lorem ipsum...'
      bgColor='black' />
      <Acordion
      title='Por qué universidad React?'
      content='
      El curso mas completo y actualizado de React ✪ Aprenderás desde nivel cero hasta conocer y dominar en nucleo de React en profundidad con todas las características que no se tocan en cursos convencionales, al finalizar el curso podrás crear componentes de calidad de producción. ' />
      <Acordion
      title='Ejemplo de Acordion'
      content='Lorem ipsum...'
      bgColor='orangered' />
    </div>
  )
}
export default App5