export type Shop = {
  id: string;
  name: string;
};

export enum ShopActionTypes {
  FETCH_SHOPS = "FETCH_SHOPS",
  FETCH_SHOPS_SUCCESS = "FETCH_SHOPS_SUCCESS",
  FETCH_SHOPS_ERROR = "FETCH_SHOPS_ERROR",
}

interface FetchShopAction {
  type: ShopActionTypes.FETCH_SHOPS;
}

interface FetchShopSuccessAction {
  type: ShopActionTypes.FETCH_SHOPS_SUCCESS;
  payload: Shop[];
}

interface FetchShopErrorAction {
  type: ShopActionTypes.FETCH_SHOPS_ERROR;
  payload: string;
}

export interface ShopState {
  shops: Shop[];
  loading: boolean;
  error: null | string;
}

export type ShopAction =
  | FetchShopAction
  | FetchShopSuccessAction
  | FetchShopErrorAction;
