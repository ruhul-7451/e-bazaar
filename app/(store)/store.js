import { create } from "zustand";

const useCart = create(
    (set, get) => ({
        cart: [],
        products: {},
        setProducts: (params) => {
            const newProduct = params;
            set((state) => {
                return {
                    ...state,
                    product: newProduct,
                }
            })
        },
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
        },
        emptyCart: () => {
            set((state) => {
                const newCart = []
                return {
                    ...state,
                    cart: newCart,
                }
            })
        }
    }))


export default useCart;