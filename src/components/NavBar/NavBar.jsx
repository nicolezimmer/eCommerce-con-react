
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Nav } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import './navBar.css';
import {FaBars, FaExclamation, FaTimes, FaDog, FaShoppingCart, FaSketch } from 'react-icons/fa';
import {TbShovel} from 'react-icons/tb'
import {BsFillUmbrellaFill} from 'react-icons/bs'
import {GiWinterGloves, GiJumpingDog} from 'react-icons/gi'
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { Contenedor, LogoContainer, Menu,  MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements';
import '../../assets/fonts/fonts.css'


export const NavBar = () => {
  const [showMobileMenu, setshowMobileMenu]= useState(false)
  return (
    <Contenedor>
      <Wrapper>
        <IconContext.Provider value={{style: {fontSize:"1.5em"}}}>
          <LogoContainer onClick={()=> setshowMobileMenu(!showMobileMenu)}>
          <Link to="/">
            
            <h1 ><GiJumpingDog/>FranciShop</h1>
            </Link>
          </LogoContainer>
          <MobileIcon onClick={()=> setshowMobileMenu(!showMobileMenu)}>
          {
            showMobileMenu ? <FaTimes/>: <FaBars/>
          }
          
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={()=> setshowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaDog className='category'/>
                  <Link to='/productos/deluxe' className='link-custom'>
                  Deluxe
                  </Link>
                </div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink onClick={()=> setshowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaExclamation className='category'/>
                  <Link to='/productos/A' className='link-custom'>
                  AAA
                  </Link>
                </div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink onClick={()=> setshowMobileMenu(!showMobileMenu)}>
                <div>
                  <TbShovel className='category'/>
                  <Link to='/productos/laburando' className='link-custom'>
                  Laburando 
                  </Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem >
              <MenuItemLink onClick={()=> setshowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaSketch className='category'/>
                  <Link to='/productos/elegante' className='link-custom'>
                  Elegante
                  </Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={()=> setshowMobileMenu(!showMobileMenu)}>
                <div>
                <FaShoppingCart/>
                  <Link to="/cart" className='link-custom'><CartWidget/></Link>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>        
        </IconContext.Provider>
      </Wrapper>
    </Contenedor>

  )
}
