import React, {useState, lazy, Suspense} from 'react'
// import Image from './Component/image'

// Lazy nos permite que vayamos cargando nuevos archivos JS a medida de que los vayamos necesitando y es parte del code splitting
// en vez de importarlo de manera sincrona como estamos acostumbrados, lo hacemos declarando una constante con el nombre del
// componente y lo igualamos a la funcion lazy que recibe por parametro un arrow function que retorna la importacion del archivo.
// Para que react reconozca que tenemos un archivo que vamos a importar asincronamente, debemos envolver en el marcado este componente
// entre las etiquetas Suspense de react que hay qe importar previamente, y estas etiquetas reciben como parametro un fallback
// que es el marcado que va a mostrar al usuario hasta que la carga del componente se complete.

const Image = lazy(() => import('./Component/image'))


const App = () => {
  const [ show, setShow ] = useState(false)

  const handleClick = () => setShow(!show)

  const Styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
  return (
    <div style={Styles}>
        <button onClick={handleClick}>
          {show ? 'Ocultar' : 'Mostrar'}
        </button>
        <div>{show && ( 
              <Suspense fallback={<h1>Loading...</h1>}>
                <Image />
              </Suspense>)}
            </div>
    </div>)

}


export default App