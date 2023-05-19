import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'

export const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <>
    <p>
    {calcularCantidad()}
    </p>

    </>
  )
}