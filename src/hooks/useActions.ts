import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ShopActionCreators from "./../store/action-creators/shop";
import * as ProductActionCreators from "./../store/action-creators/product";

export const useShopActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ShopActionCreators, dispatch);
};

export const useProductActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ProductActionCreators, dispatch);
};
