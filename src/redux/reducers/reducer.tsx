import { ADD_BASKET, CLEAR_BASKET, DELETE_BASKET } from "../types/types";
import { IProduct } from "../../types/types";

export interface BasketState {
  basketList: IProduct[];
}

const initialState: BasketState = {
  basketList: [
    {
      count: 0,
      discount: "",
      id: "",
      image: "",
      name: "",
      originalPrice: 0,
      price: 0,
      rating: 0,
    },
  ],
};

type BasketAction =
  | { type: typeof ADD_BASKET; payload: IProduct[] }
  | { type: typeof DELETE_BASKET; payload: IProduct[] }
  | { type: typeof CLEAR_BASKET,payload:IProduct[] };

export const basketReducer = (
  state: BasketState = initialState,
  action: BasketAction
): BasketState => {
  console.log(action, "accc");
  switch (action.type) {
    case ADD_BASKET:
      return {
        basketList: [...action.payload],
      };
    case DELETE_BASKET:
      return { basketList: [...state.basketList] };
    case CLEAR_BASKET:
      return {
        basketList: [],
      };
    default:
      return state;
  }
};
