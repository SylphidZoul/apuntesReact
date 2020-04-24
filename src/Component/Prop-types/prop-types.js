import React from 'react'
import PropTypes from 'prop-types'

// const Profile = () => ()
// Profile.propTypes = {}          En componentes funcionales se declaran las propTypes luego de la funcion de componente
// ======================================================================================================
// const Comp = () => ()
// Comp.defaultProps = {}         Asi tambien se declaran las defaultProps en componentes funcionales, fuera del mismo componente

const noop = () => {}

class Profile extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,              //Con esto digo los tipos de props que estoy esperando en caso de que 
        bio: PropTypes.string,                          // luego los use para alguna funcion y no me termine tirando error en ese momento
        email: PropTypes.string,                        // se pueden validar muchos tipos de datos, para mas informacion fijarse    
        age: PropTypes.number                           // la documentacion. Sino uso el isRequired solo va a tirar una alerta
    }                                                   // con isRequired ya tira un error y detiende la app
                                                        //===========================================================================
    static defaultProps = {                             // DeafaultProps sirve para darle valores por defectos a las props en el caso
        name: 'Ninja Pro',                              // de que no tengan valor, tambien sirve para darle props y probarlas en el
        onHello: noop                                   // mismo componente sin necesidad de ir a pasarale props al componente padre
    }                                                   // Tambien con defaultProps se puede usar el metodo noop, que consta de hacer
                                                        // una funcion vacia fuera de los componentes para vincular un Evento Persona_
                                                        // lizado para pasar datos del hijo al padre, en caso de que el padre no tenga
    saluda = () => {                                    // el evento en las props. De este modo no tiraria error.
        this.props.onHello()
    }

    render() {
        const { name, bio, email } = this.props

        return (
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
                <a href={`mailto:${email}`}>{email}</a>
                <button onClick={this.saluda}>Saludar</button>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Profile
                name={'Ninja'}
                bio={'Soy un desarrollador FullStack'}
                email={'my-email@mail.com'}
            />
        )
    }
}

export default App