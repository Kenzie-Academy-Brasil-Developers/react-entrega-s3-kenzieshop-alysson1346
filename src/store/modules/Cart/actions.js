import { ADD_PRODUCT, REMOVER_TODOS_PRODUCT } from "./actionsTypes";

export const addProduct = (product) => ({ type: ADD_PRODUCT, product });

export const removerTudo = (product) => ({ type: REMOVER_TODOS_PRODUCT });
