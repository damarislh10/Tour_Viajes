import { typeCarrito } from "../types/types";

const initialState = {
  carrito: [],
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeCarrito.add:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case typeCarrito.delete:
      return {
        ...state,
        carrito: state.carrito.filter((p) => p.id !== action.payload),
      };
    case typeCarrito.vaciar:
      return {
        carrito: [],
      };

    default:
      return state;
  }
};
