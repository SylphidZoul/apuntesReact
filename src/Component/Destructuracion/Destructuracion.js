// La destructuracion consta de extraer las propiedades que queramos de un objeto para no andar utilizando la nomenclatura del punto
// se utiliza de la siguiente manera: 

const user1 = {
    name: 'Gerardo Gallegos',
    username: 'luxfenix',
    country: 'mexicano',
    social: {
        facebook: 'https://fb...',
        twitter: 'https://tw...'
    }
}

const saluda = (user) => {
    const { name, social: { twitter} } = user     //esta forma de destructuracion me permite conseguir la propiedad twitter desde el obj
                                                  //social pero ya no tendre acceso a social, solo a twitter, las constantes que extraigo
    console.log(                                  //quedan en color morado
    `hola soy${name}, mi twitter es ${twitter}`
    )

}

// al momento de extraer tambien se pueden dar los siguientes casos= 

//const { name= 'SuperNinja' } = user     acá quiere decir que en el caso de que user no tenga la propiedad name, el Name de la constante
                                        //va a tomar por valor el que se le indique con igual seguido de comillas

//const { username: aliascool } = user    Al hacer esto, estoy extrayendo username de user pero a su vez renombrando la propiedad a
                                        //aliascool para luego llamarla de ese modo

// const { social: { twitter: tw }} = user   Acá estoy renombrando la propiedad twitter en una destructuracion anidada para que
                                           //user.social.twitter pase a ser simplemente tw

// Tambien puedo hacer destructuracion de una array, esta funciona de manera de que cada elemento de la destructuracion toma la posicion
// numerica de la array

// const orden = [ 'pizza', 'te verde', 'pay']
// const [ comida, bebida, postre ] = orden

// De este modo comida estaria tomando el valor de orden[0](pizza), bebida el de orden[1](te verde) y postre el de orden[2](pay).
// Tambien puedo usar el spread para agarrar mas valores si la array es larga

// const orden = [ 'pizza', 'te verde', 'pay', 124, 'false', 'otro' ]
// const [ comida, bebida, postre, ...restantes ] = orden

//En este caso, "...restantes" sera una array de los items que no agarre en las primeras destructuraciones, en este caso seria
// ...restantes = [ 124, false, 'otro' ]

// Tambien puedo hacer destructuraciones en parametros de una funcion o componente
//
// const title = (props) => {}  ----------> const Title = ({ uiColor, children }) {}

// De este modo puedo usar uiColor y Children en el componente hijo sin hacer referencia a props.