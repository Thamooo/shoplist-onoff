import { Dispatch } from "redux";
import {
  AddProductActionInput,
  DeleteProductActionInput,
  ProductAction,
  ProductActionTypes,
} from "../../types/products";

export const AddProduct = ({ shop, name }: AddProductActionInput) => {
  return (dispatch: Dispatch<ProductAction>) => {
    try {
      if (!shop) throw new Error("Shop is not selected");
      if (!name || name.length === 0) throw new Error("Name cannot be empty!");
      dispatch({
        type: ProductActionTypes.ADD_PRODUCT,
        payload: { id: shop.id, shop: shop.name, name: name },
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const DeleteProduct = ({ id }: DeleteProductActionInput) => {
  console.log(id);
  return (dispatch: Dispatch<ProductAction>) => {
    try {
      if (id === undefined) throw new Error("Deletable id is not specified");
      dispatch({
        type: ProductActionTypes.DELETE_PRODUCT,
        payload: id,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
