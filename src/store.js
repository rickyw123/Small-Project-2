import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducers} from './reducers/cartReducers';

const reducers = combineReducers({
  cart: cartReducers
});
const middleware = [thunk];
// initialstate : state awal dari reducer

//getState().cart.cart
let initialState = {
  cart: {
    cart: localStorage.getItem('cart_item') ? JSON.parse(localStorage.getItem('cart_item')) : []
  }
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;