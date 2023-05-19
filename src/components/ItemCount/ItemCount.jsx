import React, { useState } from 'react'
import './ItemCount.css'
import '../../assets/fonts/fonts.css';

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
    <div>
        <div className='text'>
            <h3>Stock: {max}</h3>
            <p>Cantidad carrito: {cantidad}</p>
        </div>
       <div className='btn'>
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
            <button onClick={resetear}>🔁</button>
        </div>

    </div>
  )
}
