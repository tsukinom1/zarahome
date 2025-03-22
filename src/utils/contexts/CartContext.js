"use client";

import {createContext, useState, useContext, useMemo} from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);

            if (existingProduct) {
                return prev.map((item) =>
                    item.id === product.id ? {...item, count: item.count + 1} : item
                );
            } else {
                return [...prev, {...product, count: 1}];
            }
        });
    };

    const increaseCount = (id) => {
        setCart((prev) =>
            prev.map(item => item.id === id ? {...item, count: item.count + 1} : item)
        )
    }

    const decreaseCount = (id) => {
        setCart((prev) =>
            prev.map(item =>
                item.id === id && item.count > 1
                    ? {...item, count: item.count - 1}
                    : item
            )
        )
    }


    const removeFromCart = (id) => {
        setCart((prev) =>
            prev.filter(item => item.id !== id)
        )
    }

    const totalPrice = useMemo(() =>
            cart.reduce((acc, cur) => acc + cur.price * cur.count, 0),
        [cart]);

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={
            {cart, setCart, addToCart, increaseCount,
            decreaseCount, removeFromCart, clearCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
