import React from "react";
import { useSelector } from "react-redux";

const useItemTotal = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const itemQuantities = useSelector((store) => store.cart.itemQuantities)

    const getItemsTotal = () => {
        const total = Object.keys(itemQuantities)
            .map((itemId) => {
                const item = cartItems.find((cartItem) => cartItem.card.info.id === itemId);
                const quantity = itemQuantities[itemId];
                return ((item?.card?.info?.price) / 100) * quantity;
            })
            .reduce((acc, curr) => acc + curr, 0);
        return total;
    };
    return getItemsTotal

}

export default useItemTotal;