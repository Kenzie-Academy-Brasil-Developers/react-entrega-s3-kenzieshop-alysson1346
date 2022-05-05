import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useHistory, Redirect } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.product);
  const history = useHistory();
  function redirect() {
    return history.push("/cart");
  }

  return (
    <div className="topo">
      <div className="headerTop">
        <h2>KENZIESHOP</h2>

        <button className="cartTotal" onClick={() => redirect()}>
          <div className="cartHome">
            <IconContext.Provider value={{ color: "#282c34", size: "25px" }}>
              <div>
                <AiOutlineShoppingCart />
              </div>
            </IconContext.Provider>
            <div className="cartQuantity">
              <p>{cart.length}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Header;
