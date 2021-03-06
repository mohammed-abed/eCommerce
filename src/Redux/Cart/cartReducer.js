import {
  ADD_SHIPPING_ADDRESS,
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_ITEM,
  INCREASE_COUNT,
  RESET_CART,
} from "./typeConstans.js";

export const cartReducer = (
  initialState = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...initialState,
        cart: [...initialState.cart, action.payload],
      };

    case INCREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };

    case DECREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };

    case DELETE_ITEM:
      return {
        ...initialState,
        cart: initialState.cart.filter((item) => item._id != action.payload),
      };
    case RESET_CART:
      return {
        ...initialState,
        cart: [],
      };
    case ADD_SHIPPING_ADDRESS:
      return {
        ...initialState,
        shippingAddress: action.payload,
      };
    default:
      return initialState;
  }
};
