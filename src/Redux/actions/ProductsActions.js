
/*import { Action_types } from "../Constants/Action_types"

export const setProducts = (products) => {
    return {
        type: Action_types.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (products) => {
    return{
        type: Action_types.SELECTED_PRODUCTS,
        payload: products,
    }
}

export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

*/

//import { ActionTypes } from "../constants/action-types";
import { ActionTypes } from "../constants/Action_types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


