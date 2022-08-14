import { Dispatch } from "redux";
import { Shop, ShopAction, ShopActionTypes } from "../../types/shops";

export const fetchShops = () => {
  return async (dispatch: Dispatch<ShopAction>) => {
    try {
      dispatch({ type: ShopActionTypes.FETCH_SHOPS });
      const response: Shop[] = await fetch("db/shops.json").then((res) =>
        res.json()
      );
      dispatch({
        type: ShopActionTypes.FETCH_SHOPS_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: ShopActionTypes.FETCH_SHOPS_ERROR,
        payload:
          "There is a problem with loading shop list, make sure that you have shops.json file in public/db folder and it's structure is correct",
      });
    }
  };
};
