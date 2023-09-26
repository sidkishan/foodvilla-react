import { useEffect, useState } from "react";
import { IMG_CDN_URL, apiEndpoint } from "../../datas.js";
import RestaurantCard from "./RestaurantCard.js";
import ShimmerUI from "./ShimmerUI.js";
import { NavLink } from "react-router-dom";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRestaurantsFromApi() {
    try {
      const resp = await fetch(apiEndpoint);
      const data = await resp.json();
      //optional chaining
      const info =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      //console.log(info);
      setAllRestaurants(info);
      setFilteredRestaurants(info);
      console.log(info);
    } catch (err) {
      console.log(err);
    }
  }
  function filterData(searchText, allRestaurants) {
    const data = allRestaurants.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        .includes(searchText?.toLowerCase());
    });
    setFilteredRestaurants(data);
  }
  useEffect(() => {
    getRestaurantsFromApi();
  }, []);

  // not render component (Early return)
  if (!allRestaurants) location.reload();
  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="app-body">
      <div className="search-area">
        <input
          type="text"
          placeholder="search your fab restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            filterData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards-container">
        {filteredRestaurants.map((restaurant) => (
          <NavLink
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              cloudinaryImageId={
                IMG_CDN_URL + restaurant?.info?.cloudinaryImageId
              }
              lastMileTravelString={restaurant?.info?.sla?.lastMileTravelString}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Body;
