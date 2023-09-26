import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../datas";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(clearCart());
  }
  return (
    <div>
      <h1>Cart Page</h1>
      <button className="clear-cart" onClick={() => handleClick()}>
        Clear Cart
      </button>
      {cartItems.length !== 0 ? (
        <div className="items-container">
          {cartItems.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={IMG_CDN_URL + item.imageId} alt="food-image" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <b>{"Price: ₹ " + Math.floor(item.price / 100)}</b>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No items in your cart!!!</h1>
      )}
    </div>
  );
};
export default Cart;
