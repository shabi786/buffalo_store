import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../Constant";
import React, { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
// import UserContext from '../context/UserContext'

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredrRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const res = await data.json();
    // console.log(res);
    setAllRestaurants(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return (
    <div className=" flex flex-col my-24">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchInput}
          className="flex border w-3/5  border-gray-400 rounded-md outline-none py-2 px-2 mx-2"
          placeholder="Search any Restaurant"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-orange-600 w-1/12 rounded-md  text-white hover:bg-orange-800"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input value={user.name} onChange={(e) => setUser({
                    ...user,
                    name: e.target.value,
                })} />
                <input value={user.email} onChange={(e) => setUser({
                    ...user,
                    email: e.target.value,
                })} /> */}
      </div>
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap mx-1">
          {filteredrRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant?.info.id}
                key={restaurant?.info.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
