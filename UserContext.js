import { createContext } from "react";

const UserContext = createContext({
  name: "Dummy Name",
  email: "dummyemail@gmail.com",
});
UserContext.displayName = "UserContext"; //for debugging purpose in react dev tools
export default UserContext;
