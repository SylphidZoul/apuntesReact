/* 
  Estos son los metodos globales que podemos usar en cualquier momento para hacer test, no hace falta importancion.

  afterAll(fn, timeout)
  afterEach(fn, timeout)
  beforeAll(fn, timeout)
  beforeEach(fn, timeout)
  describe(name, fn)
  describe.each(table)(name, fn, timeout)
  describe.only(name, fn)
  describe.only.each(table)(name, fn)
  describe.skip(name, fn)
  describe.skip.each(table)(name, fn)
  test(name, fn, timeout)
  test.each(table)(name, fn, timeout)
  test.only(name, fn, timeout)
  test.only.each(table)(name, fn)
  test.skip(name, fn)
  test.skip.each(table)(name, fn)
  test.todo(name)


  expect(value)
  expect.extend(matchers)
  expect.anything()
  expect.any(constructor)
  expect.arrayContaining(array)
  expect.assertions(number)
  expect.hasAssertions()
  expect.not.arrayContaining(array)
  expect.not.objectContaining(object)
  expect.not.stringContaining(string)
  expect.not.stringMatching(string | regexp)
  expect.objectContaining(object)
  expect.stringContaining(string)
  expect.stringMatching(string | regexp)
  expect.addSnapshotSerializer(serializer)
  .not
  .resolves
  .rejects
  .toBe(value)
  .toHaveBeenCalled()
  .toHaveBeenCalledTimes(number)
  .toHaveBeenCalledWith(arg1, arg2, ...)
  .toHaveBeenLastCalledWith(arg1, arg2, ...)
  .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
  .toHaveReturned()
  .toHaveReturnedTimes(number)
  .toHaveReturnedWith(value)
  .toHaveLastReturnedWith(value)
  .toHaveNthReturnedWith(nthCall, value)
  .toHaveLength(number)
  .toHaveProperty(pathLlave, valor?)
  .toBeCloseTo(número, númeroDigitos?)
  .toBeDefined()
  .toBeFalsy()
  .toBeGreaterThan(número)
  .toBeGreaterThanOrEqual(número)
  .toBeLessThan(número)
  .toBeLessThanOrEqual(número)
  .toBeInstanceOf(Class)
  .toBeNull()
  .toBeTruthy()
  .toBeUndefined()
  .toBeNaN()
  .toContain(item)
  .toContainEqual(item)
  .toEqual(value)
  .toMatch(regexpOrString)
  .toMatchObject(object)
  .toMatchSnapshot(propertyMatchers?, hint?)
  .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)
  .toStrictEqual(value)
  .toThrow(error?)
  .toThrowErrorMatchingSnapshot(hint?)
  .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)

*/
// Para agrupar test y tener una buena organizacion, utilizamos el metodo global qe se llama describe, que por primer parametro
// recibe el nombre del grupo y por segundo el callback qe contendra todos los test.

describe('Grupo de pruebas de ejemplo', () => {
  // Para correr los test debemos poner en la terminal npm run test
  //Para crear nuestro bloque de test, iniciamos con test() y por primer parametro recibe el nombre del test. Por segundo parametro
  //recibe un callback que contendra toda la logica del test 
  test('Una prueba unitaria de algo', () => {
    expect(10).toBe(10)
  })
  test('Segunda prueba de numeros', () => {
    expect(10).toBe(10)
  })
  
})


