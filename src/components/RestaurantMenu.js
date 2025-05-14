import React from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constant";
import useResMenu from "../hooks/useResMenu";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import Rupees from "../images/rupees.svg";
import Time from "../images/time.svg";
import { IMG_URL } from "../Constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItem] = useResMenu(resId);
  const dispatch = useDispatch();

  const itemQuantities = useSelector((store) => store.cart.itemQuantities);

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="my-20 flex  mx-48 flex-col w-2/3">
      <div className="flex border-b border-slate-400 border-dashed justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold mb-2 text-slate-800">{restaurant?.name}</h1>
          <p className="text-xs mb-1 text-slate-500">
            {restaurant?.cuisines.join(", ")}
          </p>
          <div className="flex">
            <span className="text-xs text-slate-500">
              {restaurant?.areaName},{" "}
            </span>
            <span className="text-xs text-slate-500">
              {(restaurant?.sla?.lastMileTravel / 1000).toFixed(1)} km
            </span>
          </div>
        </div>

        <div className=" flex items-center justify-center w-40 h-40 p-2 ml-4">
          <img
            src={IMG_URL + restaurant?.cloudinaryImageId}
            alt=""
            className="w-36 h-36 object-cover rounded-lg shadow"
          />
        </div>
      </div>

      <div className="flex border-b py-8 gap-5 border-slate-300">
        <div className="flex gap-2">
          <img src={Time} alt="" />
          <p className="font-bold text-slate-700">
            {restaurant?.totalRatingsString}
          </p>
        </div>

        <div className="flex gap-2">
          <img src={Rupees} alt="" />
          <p className="font-bold text-slate-700">
            {restaurant?.costForTwoMessage}
          </p>
        </div>
      </div>

      <div>
        {Object.values(menuItem).map((item) => (
          <div
            className="flex justify-between border-b border-slate-300"
            key={item?.card?.info?.id}
          >
            <div className="flex pl-2 flex-col justify-center">
              <p className="font-bold text-slate-800 pb-1">
                {item?.card?.info?.name}
              </p>
              <p className="text-slate-800 text-sm font-semibold pb-3">
                ₹ {item?.card?.info?.price / 100}
              </p>
              <p className="text-slate-500">{item?.card?.info?.category}</p>
            </div>
            <div className="py-4 flex flex-col items-center">
              <img
                className="w-40 h-40 rounded-lg"
                src={IMG_URL + item?.card?.info?.imageId}
                alt=""
              />
              <div className="flex justify-between items-center w-2/3 px-3 py-2 shadow-md rounded-md mt-2  border border-slate-200">
                <button
                  className="font-extrabold text-xl text-slate-400"
                  onClick={() => removeFoodItem(item)}
                >
                  −
                </button>
                <p className="font-bold text-green-400">
                  {itemQuantities[item?.card?.info?.id] || 0}
                </p>
                <button
                  className="font-extrabold text-xl text-green-500"
                  onClick={() => addFoodItem(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
