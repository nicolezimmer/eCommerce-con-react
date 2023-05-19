import React, {useContext, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../context/CartContext'
import './itemDetail.css'
import '../../assets/fonts/fonts.css';


export const ItemDetail = ({ id, name, description, price, image, category, stock }) => {
  const navigate = useNavigate()
  const volverParaAtras=()=>{
    navigate(-1)
  }
  
  const {addToCart} = useContext(CartContext)


  const [counter, setCounter]= useState(0)
  const [max, setStock]= useState(stock)

  const sumarAlCarrito=()=>{
    const newItem ={
      id, 
      name,
      description,
      image,
      price,
      category,
      counter
    }
    console.log(newItem)
    addToCart(newItem)

  }

  return (
    <div className='item'>
      <Card>
        <div className="item-detail">
          <Card.Img variant="top" src={image} className="item-detail-img" />
          <div className="item-detail-info">
            <Card.Body>
              <Card.Title className="item-detail-title">{name}</Card.Title>
              <Card.Text className="item-detail-description">{description}</Card.Text>
              <Card.Text className="item-detail-price">${price}</Card.Text>
              <p className='grr'>¡Woof! ¡Woof! ¡Grrrrrrr! ¡Woof! ¡Woof! ¡Grrrrrrr! ¡Woof! ¡Woof! ¡Grrrrrrr! ¡Woof! ¡Woof! Woof, woof, woof, woof, woof, woof, woof, woof, woof, woof! ¡Grrrrrrr! ¡Woof! ¡Woof! ¡Grrrrrrr! ¡Woof! ¡Woof! ¡Woof! ¡Woof! ¡Grrrrrrr! ¡Woof! ¡Grrrrrrr! ¡Woof! Grrrrrrr, grrrrrrr, grrrrrrr, woof, woof, woof</p>
            </Card.Body>
            
          </div>
        </div>
        <div className='item-button-container'>        
          <ItemCount max={max} modifyStock={setStock} modify={setCounter} cantidad={counter} className='item-detail-button'/>
          <div className='buttons'>
            <Button onClick={sumarAlCarrito} className='item-detail-button'>Agregar al carrito</Button>
            <Button onClick={volverParaAtras} className='item-detail-button'>Volver Atras</Button>
            <Button onClick={volverParaAtras} className='item-detail-button'><Link to='/cart' className='link-custom'>ir al carrito</Link></Button>
          </div>
        </div>

      </Card>

    </div>
  )
}