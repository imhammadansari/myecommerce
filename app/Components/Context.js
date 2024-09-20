"use client";
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartQuantity, setcartQuantity] = useState(0)

    const addToCart = (product) => {
        setCartProducts((prevItems) => {
            return [...prevItems, {...product, unitPrice: product.price}];
        });
    };

    const getTotalPayment = () => {
        return cartProducts.reduce((total, product) => {
            return total + product.price;
        }, 0)
        
    }

    const getTotalQuantity = () => {
        return cartProducts.reduce((total, product) => {
            return total + product.quantity;
        }, 0)
    }

    const shipping = 9.99;
    const totalPayment = getTotalPayment() + shipping;
    

    const updateCartProductQuantity = (index, quantity) => {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts[index].quantity = quantity;
        setCartProducts(updatedCartProducts);
      };

      const updateProductPrice = (index, price) => {
        const updatedPrice = [...cartProducts];
        updatedPrice[index].price = price;
        setCartProducts(updatedPrice)
      }

      useEffect (() => {
        setcartQuantity(getTotalQuantity());


      }, [cartProducts])

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, updateCartProductQuantity, setCartProducts, updateProductPrice, cartQuantity, getTotalPayment, getTotalQuantity, totalPayment }}>
            {children}
        </CartContext.Provider>
    );
};
