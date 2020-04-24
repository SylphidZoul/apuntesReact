const createStore = () => {
  let fruits = []

  return {
    addFruit: (fruit) => {
      fruits.push(fruit)
    },
    getFruits: () => {
      return fruits
    }
  }
}