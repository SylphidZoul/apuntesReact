import React, { Component, PureComponent } from 'react'

const itemStyles = {
  padding: '1em',
  borderBottom: '1px solid #CCC',
  marginTop: '0.4em'
}

class Item extends PureComponent {
  handleClick = () => {
    this.props.onRemove(this.props.item)
  }
  // El PureComponent es otro tipo de componente que incorpora por defecto el algoritmo de shouldComponentUpdate para no renderizarse
  // sino muta su state, a diferencia que si el componente es un component donde su shouldComponentUpdate por defecto siempre retorna
  // True. Tenemos qe tener cuidado porque un PureComponent solo hace las comparaciones dentro de las propiedades de primer nivel
  // osea que si tenemos en las props un objeto anidado, no lo revisara y por lo tanto si estas cambian no va a actualizar el render.
  // shouldComponentUpdate (nextProps, nextState) {
  //   return nextProps.item.id !== this.props.item.id
  // }

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
      list: state.list.filter(_item => {
        return item.id !== _item.id
      })
    }))
  }

  render () {
    return (
      <div>
        <h3>PureComponent</h3>
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