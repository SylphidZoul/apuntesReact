import React, { Component } from 'react'
import faker from 'faker'

const chatStyle = {
  width: 230,
  height: 300,
  border: '1px solid gray',
  overflow: 'auto',
  fontFamily: 'monospace'
}

const messageStyle = {
  padding: '1em',
  borderBottom: '1px solid #DDD'
}

const avatarStyle = {
  width: 50,
  height: 50,
  borderRadius: '50%'
}

class Chat extends Component {
  box = React.createRef()

  // getSnapshotBeforeUpdate es el metodo que se ejecuta justo despues del metodo render y antes de que React actualize el dom real
  // por lo que nos ayuda a guardar valores o propiedades antes de que estos cambien. En este ejemplo vamos a capturar el scroll
  // antes de que se actualize. Este metodo recibe como parametros el prevProps y prevState. Siempre debe retornar algo aunqe sea null,
  // porque le va a llegar al componentDidUpdate como 3er parametro. No puede haber un getSnapshotBeforeUpdate sin un componentDidMount
  // ya que trabajan en conjunto.
  // En este ejercicio utilizamos una libreria para conseguir datos random de cualquier tipo, en este caso lo utilizamos para tener
  // un id, un name, un avatar y un mensaje para emular una ventana de chat, luego esto lo cargamos en el state del componente padre
  // y se lo pasamos por props al hijo, este lo va a ir mapeando en cuanto vayan generandose nuevos mensajes a la lista
  // Luego creamos algunos estilos para que este mapeado se haga dentro de un div con overflow y nos genere un scroll.
  // Hasta este momento, ese scroll no baja al final del contenedor cada vez que llega un mensaje por lo que genera un problema de
  // usabilidad. Esto lo solucionamos metiendo en el componentDidUpdate una referencia del div principal del chat y poniendo:
  // this.box.current.scrollTop = this.box.current.scrollHeight
  // Donde .scrollTop es el numero en pixeles de cuanto esta alejado el scroll del comienzo del contenedor y .scrollHeight es la altura
  // total en pixeles del contenido hasta su final, de este modo le decimos que queremos que cuando llegue un nuevo mensaje, el scroll
  // baje hasta el final, pero esto también genera un problema de usabilidad ya que si el usuario esta leyendo algo de arriba, es
  // molesto que al llegar un nuevo mensaje se pierda de vista el mensaje que esta leyendo, por lo que queremos que se mande el
  // scroll hacia abajo si el scroll ya esta abajo y llega un nuevo mensaje, y no si esta en la parte de arriba. Para hacer esto
  // vamos a utilizar tambien la propiedad offsetHeight que es el alto total del contenedor incluyendo bordes, en este caso con 
  // estilos lo habiamos setteado en 302 pixeles, 300 en height y 1px de borde a cada lado. Sabiendo esto podemos hacer
  // .scrollTop + .offsetHeight >= scrollHeight, donde si da verdadero es que el usuario esta con el scroll abajo de todo, y 
  // si es falso, es porque el usuario no tiene el scroll abajo. Con esto podemos poner un condicional donde si se cumple la condicion
  // de que el usuario ya esta leyendo abajo, moverle el scroll al nuevo mensaje que llega, y si el usuario esta leyendo mensajes 
  // de arriba, dejarle el scroll ahi. Podriamos pensar en poner esta logica en el componentDidUpdate, pero al hacer esto, 
  // el componentDidUpdate se ejecuta tras la actualizacion del dom, por lo que no hara efecto, acá es donde entra al rescate
  // getSnapshotBeforeUpdate, donde hacemos la logica anterior y retornamos true o false, y esos valores van a llegar al
  // componentDidUpdate para verificar si se manda el scroll abajo de todo, o se qeda donde esta.
   


  getSnapshotBeforeUpdate () {
    const box = this.box.current
    if (box.scrollTop + box.offsetHeight >= box.scrollHeight) {
      return true
    }

    return false
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const box = this.box.current

    if (snapshot) {
      box.scrollTop = box.scrollHeight
    }

  }

  render () {
    return (
      <div 
        style={chatStyle}
        ref={this.box}
      >
        {this.props.list.map(item => (
          <div
            key={item.id}
            style={messageStyle}
          >
            <p>{ item.message }</p>
            <div>
              { item.name }
            </div>
            <img
              src={item.avatar}
              alt='Avatar'
              style={avatarStyle}
            />
          </div>
        ))}
      </div>
    )
  }
}


class App4 extends Component {
  state = {
    list: []
  }

  addMessage = () => {
    // crear mensaje falso
    const message = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase()
    }

    // agregarlo a la lista usando spread para mezclar el antiguo estado con el estado nuevo.
    this.setState(state => ({
      list: [
        ...state.list,
        message
      ]
    }))
  }

  render () {
    return (
      <div>
        <h3>getSnapShotBeforeUpdate</h3>
        <Chat
          list={this.state.list}
        />
        <button onClick={this.addMessage}>
          NEW MESSAGE
        </button>
      </div>
    )
  }
}

export default App4