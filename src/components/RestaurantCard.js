// import { useContext } from "react";
import { IMG_URL } from "../Constant";
// import UserContext from "../context/UserContext";
import Rating from "../images/rating.svg";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="w-60 m-2 p-3 rounded-lg shadow hover:scale-105 transition-transform duration-200 bg-white">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="rounded-md w-full h-32 object-cover"
      />
      <h2 className="font-semibold text-base mt-2 truncate">{name}</h2>
      <div className="flex items-center mt-1 text-sm">
        <img src={Rating} alt="rating" className="w-4 h-4" />
        <span className="ml-1 font-semibold">{avgRating}</span>
      </div>
      <p className="text-gray-600 text-sm truncate">{cuisines?.join(", ")}</p>
      <p className="text-gray-500 text-sm">{locality}</p>
    </div>
  );
};

export default RestaurantCard;
