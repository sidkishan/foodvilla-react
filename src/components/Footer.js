import { useContext } from "react";
import UserContext from "../../UserContext";
const Footer = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h3>Footer</h3>
      <p>This is the footer area</p>
      <p>{user.name + " " + user.email}</p>
    </>
  );
};
export default Footer;
