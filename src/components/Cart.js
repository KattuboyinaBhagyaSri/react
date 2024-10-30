import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearItems } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div className="w-6/12 m-auto text-center p-4">
      <div className="font-bold">Cart</div>
      <div className="flex justify-end">
        <button
          className="bg-pink-600 rounded-md text-white p-2"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
      </div>
      <div className="border border-black rounded-sm p-4 m-4">
        {cartItems.length === 0 && (
          <h1>
            Seems like your Cart is empty.
            <Link to="/">
              <button className="bg-pink-600 rounded-md text-white p-2">
                See Near By Restaurants
              </button>{" "}
            </Link>
          </h1>
        )}

        <ListItems items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
