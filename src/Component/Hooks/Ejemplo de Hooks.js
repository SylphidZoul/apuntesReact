import React, { useState, useEffect, useRef } from 'react'

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
        Hook useRef
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

// En este ejercicio vamos a hacer un buscador de items que llegan desde una api. Lo interesante de este ejercicio es como utiliza
// el debounce, que implica no optimizar para que el buscador no mande solicitudes a la api por cada letra nueva que se esribe
// o se borra en la caja de texto, esto lo logramos dentro del useEffect poniendo un setTimeout que espere 600ms y luego dentro
// un condicional preguntando si el valor actual de la caja de texto es igual a la propiedad name, entonces que recien ahi haga la 
// peticion.

const App3 = () => {
  const [ name, setName ] = useState('')
  const [ products, setProducts ] = useState([])

  const entrada = useRef()

  useEffect(() => {
    // debounce
    setTimeout(() => {
      if (name === entrada.current.value) {
        // Solicitud HTTP
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
          .then(res => res.json())
          .then(data => setProducts(data.products))
      }
    }, 600)
  }, [ name ])

  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleInput}
        ref={entrada}
      />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            { product.name }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App3