import React from 'react';
import { useLocation } from 'react-router-dom';
import errorImage from '../../assets/gif/303.gif';
import './error.css';
import '../../assets/fonts/fonts.css'
export const Error = () => {
  const location = useLocation();
  return (
    <div className="error-container">
      <p className="error-message kraash">Lo siento, el producto con ID</p>
      <p className='error-message kraashBlack'>" {location.pathname.replace('/detail/', '')}"</p> 
      <p className="error-message kraash" >no existe.</p>
      <img className="error-image" src={errorImage} alt="Error" />
    </div>
  );
}
