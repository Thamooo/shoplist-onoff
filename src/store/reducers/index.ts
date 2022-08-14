import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { shopReducer } from "./shopReducer";

export const rootReducer = combineReducers({
  shop: shopReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
