import { saluda, getId, despide } from './strings'

describe('Pruebas de strings', () => {

  test('Probando la funcion saluda', () => {

    // Hacemos esto para que el test quede mas limpio.
    const saludo = saluda('Gerardo')
    expect(saludo).toMatch('Hola soy')
  })
  test('Probando la funcion despide', () => {

    // el not hace que no tenga qe contener esa palabra.
    expect(despide()).not.toMatch('Byye')
  })
  test('Probando la funcion getId', () =>{
    // El toMatch de abajo verifica si ese string esta igual en alguna parte del string
    // del retorno, tambien es case sensitive, tambien le podemos pasar expresiones como '/\d/' para que verifique si contiene digitos.
    // Se abre y cierra con //, \d para digito, {} para cantidad.
    expect(getId()).toMatch(/\d{2}-\d{3}/)

  })
  
})