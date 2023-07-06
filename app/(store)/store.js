import { create } from "zustand";

const useCart = create(
    (set, get) => ({
        cart: [],
        products: {},
        addToCart: (params) => {
            const { newItem } = params;
            set((state) => {
                const { newCart } = { ...state.cart, newItem }
                return {
                    ...state,
                    cart: newCart,
                }
            })
        },
        removeFromCart: (params) => {
            const { itemIndex } = params;
            set((state) => {
                const { newCart } = state.cart.filter((element, index) => {
                    return index !== itemIndex;
                })

                return {
                    ...state,
                    cart: newCart,
                }
            })
        }
    }))