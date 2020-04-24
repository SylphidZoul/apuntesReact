import React, { useState } from 'react'


// Este ejemplo es como hacer una composicion implicita de componentes donde al ser todos children de un padre se comunican de una
// manera no directa sin usar librerias de terceros, abajo explico lo dificil de la composicion implicita.

export const Button = ({ type, onIncrement, onDecrement }) => {

  const action = () => {
    return type === 'increment'
      ? onIncrement()
      : onDecrement()
  }

  return (
    <button onClick={action}>
      { type === 'increment' ? 'Agregar' : 'Quitar' }
    </button>
  )
}

export const Title = ({ clicks, children }) => {

  return typeof children === 'function'
    ? children(clicks)
    : <span>{ clicks }</span>
}

export const Counter = ({ children }) => {
  const [ clicks, setClicks ]= useState(0)

  const increment = () => setClicks(clicks + 1)
  const decrement = () => setClicks(clicks - 1)

  if (!children) {
    const stlyes = {
      background: 'tomato',
      borderRadius: '0.2em',
      padding: '0.3em 1em',
      color: '#FFF'
    }

    return (
      <div style={stlyes}>
        Wops! Debes agregar componentes como {'<Button />'}
      </div>
    )
  }

  // Acá es donde logramos la composicion implicita, para esto creamos una constante _children para no ponerle children y tener problemas
  // luego, lo igualamos a la funcion children.map donde por primer parametro les pasamos las children, y luego le decimos que por cada
  // child ejecute la siguiente funcion, antes de seguir explicando es importante saber que los props.children no se pueden modificar
  // ya que son de solo lectura, por lo que para agregarle cosas hay qe clonarlos, por lo que aplicamos logica y ponemos condicionales
  // para cada tipo de child para agregarles props como clicks o onIncrement, al final de la funcion map retornamos el children clonado
  // pero con las nuevas props creadas segun el tipo de child, a lo que luego en el marcado retornamos estos _children clonados con 
  // las nuevas props, y de esta manera el marcado del componente principal luce limpio y sin props.

  const _children = React.Children.map(children, (child) => {
    console.log(child)

    let props = {}

    if (child.type === Title) {
      props.clicks = clicks
    }

    if (child.type === Button) {
      props.onIncrement = increment
      props.onDecrement = decrement
    }

    return React.cloneElement(child, props)
  })


  return _children
}
