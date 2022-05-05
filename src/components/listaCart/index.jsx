import { useSelector, useDispatch } from "react-redux";
import { removerTudoThunk } from "../../store/modules/Cart/thunk";

function ListaCart() {
  const lista = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <ul className="cartListaProducts">
      {lista.map((elem, i) => {
        return (
          <li className="cardProductsCart" key={elem.id}>
            <img className="cartImage" src={elem.image} />
            <h2 className="titleList">{elem.title}</h2>
            <p className="descriptionList">{elem.description}</p>
            <p className="picelist">R${elem.price}</p>
          </li>
        );
      })}
      <div className="totalCart">
        <p>
          Total do Carrinho: R$
          {lista.reduce((acc, cv) => {
            const result = acc + cv.price;
            return result;
          }, 0)}
        </p>
        <button
          onClick={() => dispatch(removerTudoThunk())}
          className="btnListCart"
        >
          Limpar
        </button>
      </div>
    </ul>
  );
}
export default ListaCart;
