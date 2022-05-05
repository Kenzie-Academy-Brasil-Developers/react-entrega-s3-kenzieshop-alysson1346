import Header from "../../components/header";
import Lista from "../../components/lista";
import listaProducts from "../../services/api";

const Home = () => {
  return (
    <>
      <Header />
      <Lista array={listaProducts} />
    </>
  );
};
export default Home;
