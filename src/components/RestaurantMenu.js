import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../datas";
import useRestaurant from "../../useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";
const RestaurantMenu = () => {
  //   const params = useParams();
  const { resId } = useParams();
  const [resDetails, menuDetails] = useRestaurant(resId);
  console.log("menu", menuDetails);
  console.log("restaurant", resDetails);
  const dispatch = useDispatch();
  function handleClick(item) {
    dispatch(addItem(item?.card?.info));
  }

  if (!resDetails) return;
  return (
    menuDetails && (
      <div className="restaurant-menu">
        <h1 style={{ marginBottom: "-18px" }}>{resDetails?.name}</h1>
        <p>{resDetails.areaName + ", " + resDetails.city}</p>
        <p>Restaurant id: {resId}</p>
        <img src={IMG_CDN_URL + resDetails.cloudinaryImageId} alt="res-image" />
        <h2>Menu</h2>
        <ul>
          {menuDetails.map((item) => {
            return (
              <li key={item?.card?.info?.id} className="menu-item">
                <h2>{item?.card?.info?.name}</h2>
                <button onClick={() => handleClick(item)}>Add item</button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};
export default RestaurantMenu;
