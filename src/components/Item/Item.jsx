import React from 'react';
import './item.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/fonts/fonts.css';

export const Item = ({ id, name, description, price, image, category }) => {
  return (
    <div className='item-container'>
      <Card className='item-card'>
      <Card.Title>{name}</Card.Title>
        <Card.Img  src={image} />
        <Card.Body>
          
          <Card.Text>${price} {description}</Card.Text>
          {/* <Card.Title>Categoria: {category}</Card.Title> */}
          <div className="card-button">
            <Link to={`/detail/${id}`}>
              
              <Button className="custom-button">Ver mas detalles</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};