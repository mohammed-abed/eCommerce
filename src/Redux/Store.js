import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./User/UserReducer";
import { guestReducers } from "./Guest/guestReducers";
import { cartReducer } from "./Cart/cartReducer";
import { ordersReducers } from "./Orders/ordersReducers";

const reducer = combineReducers({
    userDetails : userReducer,
    guestState  : guestReducers,
    cart        : cartReducer,
    orders      : ordersReducers,
})

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const shippingFromLocalStorage = JSON.parse(localStorage.getItem("shipping")) || {};

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
  cart: {
    cart: cartFromLocalStorage,
    shippingAddress: shippingFromLocalStorage,
  },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
