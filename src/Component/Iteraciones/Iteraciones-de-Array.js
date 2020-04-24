import React from 'react'

const frutas = [
    'fresa',
    'manzana',
    'sandia',
    'kiwi',
    'durazno',
    'mango',
    'piña'
]

class App extends React.Component {                    // El metodo map recibe una funcion por parametro, mayormente usamos arrow 
    render(){                                          // function dentro, por cada item de la array se le pone de parametro en la 
        return (                                       // arrow function, con el nombre que queramos,
            <div>
                <ul>
                    {frutas.map((fruta) => {
                        return (
                            <li>{fruta}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default App