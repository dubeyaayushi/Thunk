/* When we are gonna create our project 
we are gonna have multiple reducers
we are gonna combine those reducers here */

import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;











