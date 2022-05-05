import { addProduct, removerTudo } from "./actions";

const addProductThunk = (product) => {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("@cartProduct")) || [];
    localStorage.setItem("@cartProduct", JSON.stringify([...cart, product]));
    dispatch(addProduct(product));
  };
};

export const removerTudoThunk = () => {
  return (dispatch) => {
    localStorage.clear();
    return dispatch(removerTudo());
  };
};
export default addProductThunk;
