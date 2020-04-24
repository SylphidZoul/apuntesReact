import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './ReactTransitionGroup.css'


const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const increment = () => setClicks(clicks + 1)
  const decrement = () => setClicks(clicks - 1)

  // Se envuelve al componente que se le quiera aplicar efectos entre las etiquetas TransitionGroup y CSS transition, esta ultima
  // recibe 3 tipos de props, timeout que es el tiempo que va a durar la animacion, classNameS con S al final que identifica el nombre
  // de clase que modificaremos mediante css, y recibe una prop key que es la que le dice cuando se tiene qe ejecutar. Estos 2 componentes nos clonan de alguna
  // manera los componentes anidados para jugar con efectos de transicion, usualmente cuando hacemos animaciones mediante css
  // a veces no tenemos manera de realizar efectos cuando tenemos un elemento previo y un elemento actual a la vez, en otras palabras
  // esto nos ayuda a dar animaciones cuando un componente muta o cambia. 
  return (
    <div>
      <button onClick={increment}>
        +
      </button>
      <button onClick={decrement}>
        -
      </button>

      <div className='box'>
        <TransitionGroup>
          <CSSTransition
            timeout={1000}
            classNames='fade'
            key={clicks}
          >
            <div>
              { clicks }
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App