import Logo from "../assets/foodvilla.png";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../UserContext";
import { useSelector } from "react-redux";
const Header = ({ userstate, setUser }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Cart<span id="cart-item-circle">{cartItems.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/instamart">Instamart</NavLink>
          </li>
        </ul>
      </div>
      <p style={{ textAlign: "right" }}>{user.name + " " + user.email}</p>
      <input
        type="text"
        placeholder="see the power of context"
        value={userstate.name}
        onChange={(e) => setUser({ ...userstate, name: e.target.value })}
      />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default Header;
