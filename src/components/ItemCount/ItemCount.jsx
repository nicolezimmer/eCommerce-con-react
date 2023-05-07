import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({max, modifyStock, modify, cantidad}) => {
    const sumar =()=>{

        if (max>0){
            modifyStock(max-1)
            modify(cantidad+1)

        }
    }
    const restar =()=>{

        if (cantidad>0){
            modifyStock(max+1)

            modify(cantidad-1)

        }
    }
    const resetear =()=>{
        modifyStock(max+cantidad)
        modify(0)
    }
  return (
    <>
        <h3>Stock: {max}</h3>
        <h4>Cantidad carrito: {cantidad}</h4>
        <div className='btn'>
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
            <button onClick={resetear}>🔁</button>

        </div>
    </>
  )
}
