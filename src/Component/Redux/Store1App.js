import React from 'react'
import { Provider } from 'react-redux'
import store from './Store2'
import Counter from './Compo/CounterRedux'

// Para conectar el store a nuestra aplicacion, la importamos, y tambien importamos el Provider de reactRedux, envolvemos toda nuestra
// app con el provider y le pasamos una prop store con nuestra store. Luego en el componente que necesitemos los datos, importamos
// el HOC connect y envolvemos nuestro componente con el
const StoreApp = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
   
  )
}
export default StoreApp