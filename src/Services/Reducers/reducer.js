import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'
const initialStates = {
  cardData: [],
}

export const cartItems = (state = initialStates, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      }
      break
    default:
      return state
  }
}
