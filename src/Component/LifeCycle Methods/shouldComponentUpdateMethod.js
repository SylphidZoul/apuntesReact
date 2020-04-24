import React, { Component } from 'react'

const itemStyles = {
  padding: '1em',
  borderBottom: '1px solid #CCC',
  marginTop: '0.4em'
}

// El metodo shouldComponentUpdate se ejecuta antes del renderizado, y lo podemos ver como un interruptor que decide si el componente
// se renderiza o no, este metodo es muy util en tareas de optimizacion de componentes. Por defecto, todos los componentes de clase
// tiene un metodo shouldComponentUpdate que retorna true. Atraves de sus parametros recibe las nextProps y el nextState, por fuerza
// este metodo siempre tiene que retornar un valor booleano, sino tendremos errores.
// En este ejercicio vamos a hacer una lista de pendientes, hacemos todo lo necesario creando un form y sus manejadores para actualizar
// el state, le ponemos un id con las funciones Math.random().toString(16), donde math.random devuelve un numero random y toString(16)
// lo devuelve en forma de texto hexadecimal, luego mapeamos la lista en un nuevo componente que creamos llamado item, donde le pasamos
// por props la lista. En el componente hijo renderizamos el item de la lista y un boton x para borrar el item, este ultimo va a llamar
// a una funcion que va a disparar un evento personalizado llamado onRemove pasandole la informacion del item, esto lo va a recibir el
// padre y va a llamar a la funcion eliminar que le llegan props del item para identicarlo, y con esto esa funcion va a remover el item
// de la lista del state, esto lo logramos usando el metodo setState que recibe un arrow function con el state de parametro y dentro
// igualamos list a una funcion state.list.filter que nos va a devolver un nuevo array pero filtrado con las condiciones que le 
// especifiquemos, lo voy a explicar en su linea. Hasta aca tenemos un problema que quizas no nos demos cuenta, cada vez que se
// agrega un nuevo item a la lista y al renderizado, todas las instancias del componente item se vuelven a renderizar por mas qe no
// hayan cambiado, esto nos podria generar un problema de rendimiento. Esto simplemente lo solucionamos usando shouldComponentUpdate
// en el componente hijo, y dentro le decimos que si las props nuevas que acaban de llegar, son distintas de las props que ya tenia
// entonces que devuelva true al renderizar otra vez, en caso contrario, que niegue el renderizado.
// IMPORTANTE: en este caso tambien se podria usar un PureComponent y nos ahorrariamos el trabajo del shouldComponentUpdate ya que 
// este viene configurado para hacer exactamente lo mismo que escribimos aca.


class Item extends Component {
  handleClick = () => {
    this.props.onRemove(this.props.item)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.item.id !== this.props.item.id) {
      return true
    }

    return false
  }

  render () {
    const { item } = this.props

    console.log('Render 🔥 ' + item.text)

    return (
      <div style={itemStyles}>
        <button onClick={this.handleClick}>
          x
        </button>
        <span>
          { item.text }
        </span>
      </div>
    )
  }
}


class App extends Component {
  state = {
    list: []
  }

  agregar = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    const id = Math.random().toString(16)
    const pendiente = { text, id }

    this.setState(state => ({
      list: [
        ...state.list,
        pendiente
      ]
    }))

    e.target[0].value = ''
  }

  eliminar = (item) => {
    this.setState(state => ({
      list: state.list.filter(_item => { //aca le damos la condicion de que item va a ser agregado a la nueva array y cual no
        return item.id !== _item.id      // por cada _item, te vas a fijar si el id de este _item corresponde con el id del .item
      })                                 // que activo el evento onRemove, en este caso esta preguntando si este no es el item buscado
    }))                                   // si da true, este item se agrega a la nueva array, si da false, este item no se agregara
  }                                       // a la nueva array y por ende sera eliminado.

  render () {
    return (
      <div>
        <h3>shouldComponentUpdate</h3>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder='Ingresa tu pendiente' />
          <button>
            Agregar
          </button>
        </form>
        <div>
          {this.state.list.map(item => (
            <Item
              key={item.id}
              item={item}
              onRemove={this.eliminar}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App