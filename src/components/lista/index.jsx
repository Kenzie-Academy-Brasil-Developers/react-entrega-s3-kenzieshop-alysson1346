import addProductThunk from "../../store/modules/Cart/thunk";
import { useDispatch } from "react-redux";

const Lista = ({ array }) => {
  const dispatch = useDispatch();
  return (
    <ul className="listaProducts">
      {array.map((elem) => {
        return (
          <li className="cardProducts" key={elem.id}>
            <img className="imgList" src={elem.image} />
            <h2 className="titleList">{elem.title}</h2>
            <p className="descriptionList">{elem.description}</p>
            <p className="picelist">R${elem.price}</p>
            <div>
              <button
                onClick={() => dispatch(addProductThunk(elem))}
                className="btnList"
              >
                Add carrinho
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Lista;
