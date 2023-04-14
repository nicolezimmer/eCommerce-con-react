import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = () => {
    const [stock, setStock]= useState(10)
    const [counter, setCounter]= useState(0)
    const sumar =()=>{

        if (stock>0){
            setStock(stock-1)
            setCounter(counter+1)

        }
    }
    const restar =()=>{

        if (counter>0){
            setStock(stock+1)

            setCounter(counter-1)

        }
    }
    const resetear =()=>{
        setStock(stock+counter)
        setCounter(0)
    }
  return (
    <>
        <h3>Stock: {stock}</h3>
        <h4>Cantidad carrito: {counter}</h4>
        <div className='btn'>
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
            <button onClick={resetear}>🔁</button>

        </div>
    </>
  )
}
