import Header from "./Header";
import "../../style.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserContext from "../../UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../utilities/Store";
const App = () => {
  const [user, setUser] = useState({
    name: "Siddharth Kishan",
    email: "sid@gmail.com",
  });

  return (
    <div>
      <Provider store={store}>
        <UserContext.Provider value={user}>
          <Header userstate={user} setUser={setUser} />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
