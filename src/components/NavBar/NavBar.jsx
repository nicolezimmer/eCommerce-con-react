import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import './navBar.css';
import { FaCoffee } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <div className='menu'>  
      <Link to="/"><h1><FaCoffee />Ecommerce-Francis<FaCoffee /></h1></Link>
      {/* <Button variant='primary' className='verde'>Instagram</Button>
      <Button variant='primary' className='verde'>WhatsApp</Button>
      <Button variant='primary' className='verde'>Carrito </Button> */}
      <Link to="/" className='verde'>Inicio</Link>
      <Link to="/counter" className='verde'>Contador</Link>
      <Link to="/pika" className='verde'>Pokemones</Link>
      <Link to='/productos/electrodomestico'>electrodomesticos</Link>
      <Link to='/productos/ropa'>ropa</Link>

      <Link to="/" className='verde'><CartWidget/></Link>

    </div>
  )
}
