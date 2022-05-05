import { AiOutlineRollback } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";

const HeaderCart = () => {
  const history = useHistory();
  return (
    <div className="topo">
      <div className="headerTop">
        <h2>KENZIESHOP</h2>

        <button className="cartTotal" onClick={() => history.push("/")}>
          <div className="cartHome">
            <IconContext.Provider value={{ color: "#282c34", size: "25px" }}>
              <div>
                <AiOutlineRollback />
              </div>
            </IconContext.Provider>
          </div>
        </button>
      </div>
    </div>
  );
};
export default HeaderCart;
