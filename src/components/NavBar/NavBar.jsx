import React from 'react'
import { Button, Nav } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import './navBar.css';
import { FaCoffee } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <div className='menu'>  
      <h1><FaCoffee />Ecommerce-Francis<FaCoffee /></h1>
      <Button variant='primary'>Instagram</Button>
      <Button variant='primary'>WhatsApp</Button>
      <Button variant='primary'>Carrito <FaShoppingCart /></Button>
      <CartWidget/>
    </div>
  )
}
