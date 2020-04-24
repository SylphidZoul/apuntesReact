import React from 'react'
import { Counter, Title, Button } from './components/Counter'

// Los children son lo que le pasamos a un componente entre sus etiquetas, podemos pasarle literalmente cualquier cosa, hasta
// una funcion, esto a veces en el padre de los children nos llegara como una array, como un objeto raro, o cualquier tipo de formato
// por lo que nos los podemos tratar asi no mas, React define a los children como una estructura opaca de datos, pero a su vez 
// nos otorga herramientas para lidiar con ellos, estas herramientas se llaman React.children. El más comun es el .map que 
// recibe por primer parametro los children y por segundo una funcion, este map aplicara esa funcion a cada children, y a su vez
// solo filtra los hijos qe puede renderizar, por lo qe si en los children hay una funcion, no la incluira en la array que retorna
// este metodo, El segundo es ForEach que tambien iterara en cada children, pero este no retorna una array sino qe hara una funcion.
// Tambien tenemos toArray que convierte a los children si o si en una array, por mas que sea un solo elemento y sea pasado como
// un string, eso para poder mapearlo y renderizarlo. Children.count cuenta cuantos children se le pasaron y retorna el numero
// y por ultimo children.only se asegura de que solo se le pase un children y tiene que ser especificamente un elemento de lo contrario
// tirara error.

const App = () => (
  <div>
    <Counter>
      <Title />
      <Button type='increment' />
      <Title>
        {(click) => (
          <div style={{ color: 'purple' }}>
            <h1>{ click }</h1>
          </div>
        )}
      </Title>
      <Button type='decrement' />
    </Counter>
  </div>
)

export default App