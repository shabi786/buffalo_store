import React from "react";
import { CART_IMAGE_URL } from "../Constant";
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={CART_IMAGE_URL} alt="empty" className=" h-[250px] w-[250px]" />
            <h2 className="px-14 pt-8 my-4">Your cart is empty !</h2>
            <Link to='/'>
                <button className="bg-orange-400 px-4 py-2 hover:drop-shadow-lg backdrop:blur">SEE RESTAURANT NEAR YOU</button>
            </Link>
        </div>
    )
}

export default EmptyCart;