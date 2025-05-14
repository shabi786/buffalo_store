import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useItemTotal from "../hooks/useItemTotal";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
// import Payment from "./Payment";

const Cart = () => {
    const cartItem = useSelector(store => store.cart.items);
    const itemQuantities = useSelector((store) => store.cart.itemQuantities);
    const dispatch = useDispatch();
    const getitemsTotal = useItemTotal();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    const removeFoodItem = (item) => {
        dispatch(removeItem(item));
    }


    return Object.values(cartItem).length > 0 ? (

        <div className="my-20 mx-6 flex flex-col items-center">
            <div className="flex w-2/3 justify-between  mb-6">
                <h1 className="text-3xl m-2 font-bold">Cart Item - {cartItem.length}</h1>
                <button className="bg-red-500 p-2 m-2 rounded-md" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="flex flex-col w-2/3">
                {Object.keys(itemQuantities).map((itemId) => {
                    const item = cartItem.find((cartItem) => cartItem.card.info.id === itemId);
                    const quantity = itemQuantities[itemId];
                    return (
                        <div className="flex items-center justify-between py-5 px-2" key={itemId}>
                            <p className="">{item.card.info.name}</p>
                            <div className="flex items-center gap-3">
                                <div className="flex justify-between items-center w-2/3 px-3 py-1 shadow-md rounded-md  border border-slate-200">
                                    <button className="font-extrabold text-xl pr-1 text-slate-400" onClick={() => removeFoodItem(item)}>
                                        −
                                    </button>
                                    <p className="font-bold text-green-400">{quantity}</p>
                                    <button className="font-extrabold pl-1 text-xl text-green-500" onClick={() => addFoodItem(item)}>
                                        +
                                    </button>
                                </div>
                                <p>₹{((item?.card?.info?.price) / 100) * quantity}</p>
                            </div>

                        </div>
                    );
                })}
                <div className="flex justify-between border-t border-gray-400 py-3 px-2">
                    <div>
                        <p>To Pay</p>
                    </div>
                    <div>
                        <p>₹ {getitemsTotal()}</p>
                    </div>
                </div>
            </div>
            <div className=" bg-orange-400 px-4 py-2 mt-2 hover:drop-shadow-lg backdrop:blur">
                Checkout
                {/* <Payment text={"Checkout"} /> */}
            </div>
        </div>
    ) : (
        <div className="my-20 mx-6">
            <EmptyCart />
        </div>
    )
}

export default Cart;
