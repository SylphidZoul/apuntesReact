// import React from 'react'
// import ReactDOM from 'react-dom'

// class PortalModal extends React.Component {
//     render() {
//         return ReactDOM.createPortal((
//             <div>
//                 <h1>Portal</h1>
//             </div>
//         ), document.getElementById('modal-root'))
//     }
// }

// en index.html bajo el <div id='root'></div> donde esta montada la aplicacion principal, tengo que crear
// un div mas como <div id='modal-root'></div> que es al que voy a acceder con el getElementById del segundo
// parametro de la funcion ReactDom.createPortal.
// estos se montan en un nodo que no es el root de toda la aplicacion pero aun asi actuan como si estuvieran en el arbol principal de
// react, se usan para hacer modales y ventanas flotantes