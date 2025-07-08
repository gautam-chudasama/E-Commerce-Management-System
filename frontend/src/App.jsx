import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav.jsx";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproduct } from "./store/actions/productActions.jsx";

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncloadproduct());
  }, [products]);

  return (
    <div className="px-[5%] w-screen min-h-screen bg-gray-800 text-white font-thin">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
