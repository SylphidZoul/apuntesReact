import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
      useImperativeHandle
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}
// El hook useImperativeHandle nos permite crear una especie de lista de funciones a los que podemos tener acceso desde el exterior 
// con una ref, estas funciones pueden moficar el state del componente o no, se utiliza generando un forwardRef al componente hijo
// y luego en el hook useImperativeHandle le llega por primer parametro la ref, y por segundo parametro una arrow function que 
// contenga un objeto con todas las funciones que queremos compartir con el exterior, y luego con alguna accion del exterior podemos
// acceder a estos metodos mediante la ref.current.metodo
// React.forwardRef()
// Ejecutar metodos de instancia

const FancyInput = forwardRef((props, ref) => {
  const [ text, setText ] = useState('***')
  const entrada = useRef()

  useImperativeHandle(ref, () => ({
    dispatchAlert: () => {
      alert('Hola')
    },

    setParragraph: (message) => {
      setText(message)
    },

    focusInput: () => {
      entrada.current.focus()
    }
  }))

  return (
    <div>
      <p>{ text }</p>
      <input type='text' ref={entrada} />
    </div>
  )
})

const App = () => {
  const fancyInput = useRef()

  const handleClick = () => {
    fancyInput.current.focusInput()
  }

  return (
    <div>
      <Header />
      <FancyInput ref={fancyInput} />
      <button onClick={handleClick}>
        Dispatch
      </button>
    </div>
  )
}

export default App