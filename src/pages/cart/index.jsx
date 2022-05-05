import HeaderCart from "../../components/headerCart";
import ListaCart from "../../components/listaCart";
import { useSelector } from "react-redux";

function Cart() {
  const lista = useSelector((state) => state);
  return (
    <>
      <HeaderCart />
      <ListaCart />
    </>
  );
}
export default Cart;
