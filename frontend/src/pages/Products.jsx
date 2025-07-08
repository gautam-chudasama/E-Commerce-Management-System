import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import { Suspense, useEffect, useState } from "react";
import axios from "./../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);
  // const products = useSelector((state) => state.productReducer.products);

  const [products, setproducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchproducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=6&_start=${products.length}`
      );
      // console.log(data);
      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        setproducts([...products, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const renderproduct = products.map((product) => {
    return (
      <div
        className="rounded-2xl w-[19%] mr-3 mb-3 border shadow"
        key={product.id}
      >
        <img
          className="rounded-2xl w-full h-[35vh] object-cover"
          src={product.image}
          alt="error"
        />
        <div className="ml-3 mr-3">
          <h1 className="mb-1.5">{product.title}</h1>
          <small>{product.description?.slice(0, 70)}...</small>
          <div className="p-3 mt-3 flex items-center justify-between">
            <p>₹{product.price}</p>
            <button onClick={() => AddtoCartHandler(product)}>
              Add to cart
            </button>
          </div>
          <Link
            className="m-auto w-1/2 text-center block"
            to={`/product/${product.id}`}
          >
            More Info
          </Link>
        </div>
      </div>
    );
  });

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchproducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="w-full overflow-auto flex flex-wrap">
        <Suspense
          fallback={
            <h1 className="text-center text-5xl text-yellow-500">Loading...</h1>
          }
        >
          {renderproduct}
        </Suspense>
      </div>
    </InfiniteScroll>
  );
};

export default Products;
