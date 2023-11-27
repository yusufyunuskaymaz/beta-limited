import { IProduct } from "../../types/types";
import { ADD_BASKET,CLEAR_BASKET,DELETE_BASKET } from "../types/types";

export const addBasket = (payload:IProduct[]) => {
  return {
    type: ADD_BASKET,
    payload: payload,
  };
};
export const deleteBasket = (payload:string) => {
  return {
    type: DELETE_BASKET,
    payload: payload,
  };
};
export const clearTodo = () => {
  return {
    type: CLEAR_BASKET,
  };
};