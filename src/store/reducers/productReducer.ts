import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from "../../types/products";

const initialState: ProductState = {
  products: [],
};

export const productReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return { products: [action.payload, ...state.products] };
    case ProductActionTypes.DELETE_PRODUCT:
      return {
        products: state.products.filter((item, id) => id !== action.payload),
      };
    default:
      return state;
  }
};
