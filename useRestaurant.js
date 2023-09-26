import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [resDetails, setRestDetails] = useState(null);
  const [menuDetails, setMenuDetails] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const resp = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8976785&lng=77.7065754&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER
            `
    );
    const data = await resp.json();
    console.log("Hello data", data);
    setRestDetails(data?.data?.cards[0]?.card?.card?.info);
    setMenuDetails(
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards
      //596802
      //48078
      // 570509
    );
  }

  return [resDetails, menuDetails];
};
export default useRestaurant;
