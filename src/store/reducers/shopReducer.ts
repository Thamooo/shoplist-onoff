import { ShopAction, ShopActionTypes, ShopState } from "../../types/shops";

const initialState: ShopState = {
  shops: [],
  loading: false,
  error: null,
};

export const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOPS:
      return { loading: true, error: null, shops: [] };
    case ShopActionTypes.FETCH_SHOPS_SUCCESS:
      return { loading: false, error: null, shops: action.payload };
    case ShopActionTypes.FETCH_SHOPS_ERROR:
      return { loading: false, error: action.payload, shops: [] };
    default:
      return state;
  }
};
