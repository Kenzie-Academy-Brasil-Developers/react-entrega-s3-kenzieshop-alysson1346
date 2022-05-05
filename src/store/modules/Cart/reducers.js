import { ADD_PRODUCT, REMOVER_TODOS_PRODUCT } from "./actionsTypes";

const initialState = JSON.parse(localStorage.getItem("@cartProduct")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];

    case REMOVER_TODOS_PRODUCT:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
