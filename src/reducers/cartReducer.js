import { createReducer} from '@reduxjs/toolkit'

export const cartReducer = createReducer({
    cartItems: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
    tax:0
}, {
    addToCart: (state, action) => { 
        const item = action.payload;
        const isItemExist = state.cartItems.find((x) => x.id === item.id)
        console.log(isItemExist)
        if (isItemExist) { 
            state.cartItems.forEach((x) => {
                if (x.id === item.id) {
                    x.quantity += 1;
                }
            })
        }
        else {
            state.cartItems.push(item);
        }
    },
    DECREMENT: (state, action) => { 
        const item = state.cartItems.find((x) => x.id === action.payload)
        if (item.quantity > 1) {
            state.cartItems.forEach((x) => {
                if (x.id === item.id) {
                    x.quantity -= 1;
                }
            })
        }
    },
    DELETE: (state, action) => { 
        state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
    },
    CalculatePrice: (state) => {
        let sum = 0;
        state.cartItems.forEach((x) => {
            sum += x.price * x.quantity;
        })
        state.subtotal = sum;
        state.tax = +(state.subtotal * 0.18).toFixed();
        state.shipping = state.subtotal > 1000 ? 0 : 200;
        state.total = state.subtotal + state.shipping + state.tax;

    }
});