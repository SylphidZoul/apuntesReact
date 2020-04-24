import { createStore } from 'redux'

// Store es el almacenamiento de nuestros estados de la aplicacion
// Reducer es una funcion pura que nos regresa el estado actual
// las funciones puras son aquellas que dados 2 parametros de entrada, siempre nos va a retornar lo mismo por mas que lo ejecutemos
// 100 veces, tambien las funciones puras no modifican variables que sean usadas fuera de ella.
// el reducer puede tener de nombre lo que qeuramos mientras sea descriptivo, este recibe por parametros el state actual y la accion.
// con estos 2 puede hacer la logica que necesite para devolver los datos. Para crear una store, simplemente creamos una constante
// con el nombre que queramos y lo igualamos a createStore que recibe como parametro el Reducer.
const initialState= 0
// Nombres de constantes de acciones
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Reducer
function counter (state = initialState , action) {
  
  switch (action.type){
    case INCREMENT:
      return state + 1
      
    case DECREMENT:
      return state - 1
    
    default:
      return state
  }

}
// Con store tenemos los siguientes metodos
// store.getState() nos retorna el estado actual del state
// store.dispatch() se utiliza para disparar acciones, que usualmente es un objeto que va a llegar como "action", y luego generamos
// logica con esto para saber como manipular el estado. Es recomendable guardar las acciones en constantes para no cometer errores
// al escribir los strings. Tambien poedemos darle por parametros una funcion que ya retorne el objeto armado.
// store.subscribe(fun) nos suscribe a los cambio que puede llegar a ocurrir en el store, este recibe un listener. Cada vez que el state
// actualiza su estado, este dispara la funcion, en este caso solo es imprimir en consola, con cada actualizacion del state.


const store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
})
//Acciones
store.dispatch({
  type: INCREMENT
})

setTimeout(() => {
  store.dispatch({type: DECREMENT})
}, 2000)

//creadores de acciones, creamos acciones que retornen el tipe en vez de escribir todo el objeto dentro del dispatch
const increment = () => {
  return {
    type: INCREMENT
  }
}

//accion con creador de accion
store.dispatch(increment())


// Todo esto es redux puro, en nuestro caso usamos el paquete react-redux.


export default store