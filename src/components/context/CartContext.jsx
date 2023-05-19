// import { createContext, useEffect } from "react";
// import { useState } from 'react';

// export const CartContext = createContext()

// const init = JSON.parse(localStorage.getItem('carrito')) || []

// export const CartProvider = ({children}) =>{

//     const [carrito, setCarrito] = useState(init)

//     useEffect(() =>{
//         localStorage.setItem('carrito', JSON.stringify(carrito))
//     }, [carrito])

//     const addToCart = (item) =>{
//         setCarrito([...carrito, item])
//     }
//     const calcularCantidad = () =>{
//         return carrito.reduce((acc, prod) => acc + prod.counter, 0)
//     }

//     const precioTotal = () =>{
//         return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
//     }

//     const removerItem = (itemId) =>{
//         const newCart = carrito.filter((prod) => prod.id !== itemId)
//         setCarrito(newCart)
//     }
//     const vaciarCarrito = () =>{
//         setCarrito([])
//     }

//     return(
//         <CartContext.Provider value={{
//                 addToCart,
//                 calcularCantidad,
//                 precioTotal,
//                 removerItem,
//                 carrito,
//                 vaciarCarrito
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(init);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (item) => {
    if (item.counter > 0) {
      const existingItem = carrito.find((prod) => prod.id === item.id);
      if (existingItem) {
        const updatedCart = carrito.map((prod) =>
          prod.id === item.id ? { ...prod, counter: prod.counter + item.counter } : prod
        );
        setCarrito(updatedCart);
      } else {
        setCarrito([...carrito, item]);
      }
    }
  };

  const calcularCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.counter, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0);
  };

  const removerItem = (itemId) => {
    const newCart = carrito.filter((prod) => prod.id !== itemId);
    setCarrito(newCart);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        calcularCantidad,
        precioTotal,
        removerItem,
        carrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
