import { createStore } from 'redux'

const initialState= 0

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


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
export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}

const store = createStore(counter)

export default store