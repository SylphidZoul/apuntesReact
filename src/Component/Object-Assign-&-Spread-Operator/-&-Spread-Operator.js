//Ejemplo de Object.assign

const perfil = {
    name: 'gerardo',
    info: {
        direccion: 'la direccion...'
    }

}

const region = {
    pais: 'mexico',
    info: {
        coordenadas: 'x213 y14234'
    }
}
const social = {
    twitter: '@luxfenix'
}

// Object.assign fuciona en un nuevo objeto todos los que se le pasen por parametro, solo itera
// primer nivel por lo que si tengo objetos dentro de los objetos no va a revisarlos, si encuentra variables
// repetidas dentro de los objetos, va a tomar el ultimo en efecto cascada
const resultado = Object.assign(
    {},
    perfil,
    region,
    social,
    {
    info: Object.assign(
        {},
        perfil.info,
        region.info
    )
    }
)

//para mezclar tambien los objetos internos se debe hacer otro Object.assign, dentro del primer Object.assign o fuera=

// resultado.info = Object.assign(
    //     {},
    //     perfil.info,
    //     region.info
    // )
console.log(resultado);

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

//Spread Operator=

const perfil2 = {
    name: 'gerardo',
    info: {
        direccion: 'la direccion...'
    }

}
const region2 = {
    pais: 'mexico',
    info: {
        coordenadas: 'x213 y14234'
    }
}

const social2 = {
    twitter: '@luxfenix',
    name: 'ninja pro'
}

const resultado2 = {
    ...region2,
    ...perfil2,
    ...social2,
    info: {
        ...perfil2.info,
        ...social2.info
    }
}
console.log(resultado2)

// el operador spread funciona igual qe object.assign pero su sintaxis es mas legible y mas facil de entender.

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//Spread en Arrays =

const frutasVerdes = [
    'kiwi',
    'uva',
    'limon',
]
const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
]
const frutas = [
    ...frutasVerdes,
    'pera',
    ...frutasRojas,
    'ciruela'
]
console.log(frutas)

//es muy facil mezclar arrays con el metodo spread y agregarle mas items en el principio, medio o final.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Spread se usa en la mutacion de States cuando cuentan con mas de 1 propiedad, para que al usar setState, el nuevo estado con la
//propiedad modificada, no sobrescriba el estado anterior con las otras propiedades sin modificar

const add = () => {
    //this.setState((state) => (     al setState le paso de parametro una funcion anonima que recibe de parametro el state o prevState
    //    {                          para poder fusionarlo con las modificaciones del nuevo estado y asi no perder propiedades que no
    //       video: {                este modificando
    //          ...state.video,
    //          likes: state.video.likes + 1
    //          }
    // }))
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Para unir datos en un solo objetos de props se puede hacer =

// state = {                              al renderizar las props en el componente gato con un JSON.stringify(props, null, 4)
//     fuerza: 100,                       si pasamos el !!!otrosDatos de esa manera, el resultado quedaria como 
//     vidasRestantes: 7                        {
// }                                                "name": "Garfield",
// return (                                         "age": "2 años",
//     const otrosDatos=  {                         "otrosDatos": {
//         raza: 'tropical',                                        "raza": "tropical"
//         peleasNocturnas: 300                                      "peleasNocturnas": 300
//     }                                                           }
//     <div>                                          "fuerza": 100,
//         <gato name='Garfield'                      "vidasRestantes": 7
//               age= '2 años'                     }
//            !!!otrosDatos={otrosDatos}            
//               {...otrosDatos}            En cambio, si lo pasamos con spread quedan todos los objetos de las props al mismo nivel
//               {...this.state}
//             />
//     </div>
// )
