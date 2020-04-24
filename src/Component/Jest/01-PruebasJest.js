import React from 'react'
// Los test no se pueden escribir en el mismo JS que pertenece el test, por lo que debemos crear un archivo con el mismo nombre
// pero con la extension .test.js o .spec.js, Jest tambien busca archivos .jsx, .ts o .tsx que son typescript.
// Los archivos de test se pueden tener al lado del archivo que testean o en una carpeta dentro del mismo directorio llamada __test__

const PruebasJest = () => {
  return (
    <div>
      <h1>
        Introduccion a Unit Testing
      </h1>
    </div>
  )
}

export default PruebasJest
