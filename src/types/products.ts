import { Shop } from "./shops";

type Product = {
  id: string;
  shop: string;
  name: string;
};

export enum ProductActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
}

interface AddProductAction {
  type: ProductActionTypes.ADD_PRODUCT;
  payload: Product;
}

interface DeleteProductAction {
  type: ProductActionTypes.DELETE_PRODUCT;
  payload: number;
}

export type AddProductActionInput = {
  shop: Shop | undefined;
  name: string | undefined;
};

export type DeleteProductActionInput = {
  id: number;
};

export interface ProductState {
  products: Product[];
}

export type ProductAction = AddProductAction | DeleteProductAction;
