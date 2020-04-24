import React, { useState, useEffect, useLayoutEffect } from 'react'

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
        useLayoutEffect
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

// Este hook no lo vamos a necesitar mucho, ya que tiene el mismo comportamiento que tiene el hook useEffect,
// Sus principales diferencias es que mientras useEffect es una funcion asincrona que se ejecuta despues de la actualizacion del DOM,
// useLayoutEffect es sincrono y se ejecuta justo antes de la actualizacion en el DOM, por lo que el 99% de los casos usaremos
// useEffect.

const App = () => {
  const [ count, setState ] = useState(0)

  useEffect(() => {
    console.log('useEffect 1')
  }, [ count ])

  useEffect(() => {
    console.log('useEffect 2')
  }, [ count ])

  // useEffect -> asincrono
  // useEffect -> se ejecuta despues de que se actualiza DOM
  // useLayoutEffect -> sincrono
  // useLayoutEffect -> se ejecuta antes de la actualizacion DOM

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  }, [ count ])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  }, [ count ])

  const add = () => setState(count + 1)

  return (
    <div>
      <Header />
      <button onClick={add}>
        Add ({ count })
      </button>
    </div>
  )
}

export default App