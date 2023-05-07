import React, {useContext, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../context/CartContext'


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
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error totam quibusdam doloribus, alias aperiam exercitationem laboriosam illum similique eos, delectus vitae odit maxime, repellendus iusto quisquam placeat blanditiis. Cupiditate! </p>
          <Card.Title>Categoria: {category}</Card.Title>
          <ItemCount max={max} modifyStock={setStock} modify={setCounter} cantidad={counter} />
          <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
        </Card.Body>
        <Button onClick={volverParaAtras}>Volver Atras</Button>
        <Link to='/cart' className='btn btn-info'>ir al carrito</Link>
      </Card>
    </div>
  )
}