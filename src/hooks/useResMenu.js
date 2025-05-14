import React, { useState, useEffect } from "react";
import { SWIGGY_MENU_API } from "../Constant";

const useResMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItem, setMenuItem] = useState(null);
  useEffect(() => {
    getRestaurntInfo();
  }, []);

  const getRestaurntInfo = async () => {
    const data = await fetch(SWIGGY_MENU_API + resId);
    const json = await data.json();
    console.log(json);
    const restaurantData = json?.data?.cards[2]?.card?.card?.info;
    const menuData =
      json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
        ?.card?.itemCards;
    setRestaurant(restaurantData);
    setMenuItem(menuData);
  };
  return [restaurant, menuItem];
};

export default useResMenu;
