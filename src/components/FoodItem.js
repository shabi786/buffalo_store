import React from "react";
import { IMG_URL } from "../Constant";

const FoodItem = ({ name, price, imageId, category }) => {
    return (
        <div className='cursor-pointer w-72 h-72 m-3 shadow-md hover:scale-105 hover:border border-gray-400 pb-2'>
            <img
                src={
                    IMG_URL +
                    imageId
                }
            />
            <h2 className="font-bold pt-2 pl-2">{name}</h2>
            <p className="pl-2">₹{price / 100}</p>
            <p className="pl-2">{category}</p>
        </div>
    )
}

export default FoodItem;