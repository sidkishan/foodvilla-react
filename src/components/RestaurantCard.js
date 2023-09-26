import { useContext } from "react";
import { IMG_CDN_URL } from "../../datas";
import UserContext from "../../UserContext";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const user = useContext(UserContext);
  return (
    <div className="card">
      <img src={cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5>{user.name + " " + user.email}</h5>
    </div>
  );
};
export default RestaurantCard;
