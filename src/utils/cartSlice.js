import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        itemQuantities: {}, //Object to store item quantities
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const itemId = item?.card?.info?.id;
            state.items.push(item);
            state.itemQuantities[itemId] = (state.itemQuantities[itemId] || 0) + 1;
        },
        clearCart: (state) => {

            state.items = []
            state.itemQuantities = {};
        },
        removeItem: (state, action) => {
            const item = action.payload;
            const itemId = item?.card?.info?.id;
            const itemIndex = state.items.findIndex((i) => i?.card?.info?.id === itemId);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
                if (state.itemQuantities[itemId] > 1) {
                    state.itemQuantities[itemId]--;
                } else {
                    delete state.itemQuantities[itemId];
                }
            }
        }
    }
})

export const { addItem, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
