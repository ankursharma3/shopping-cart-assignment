import { SET_PRODUCTS_CATEGORY } from "../types";

export const productsInitialState = [];

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_CATEGORY:
      return [...action.payload];
    default:
      return state;
  }
};

export default productsReducer;