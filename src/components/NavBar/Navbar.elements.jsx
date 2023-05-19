import React from 'react';
import styled from "styled-components";
import '../../assets/fonts/fonts.css'

export const Contenedor = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFEB3B;
`;
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;
export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;


    svg{
        fill: #EEC203;
        margin-right: 0.5rem;
    }
    h1{
        font-family: 'Candy_Pop';
        color: #EEC203;
        font-size: 1.9rem;
    }

`;
export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 10px;

    @media screen and (max-width: 1074px){

        position: absolute;
        top: 70px;
        left: ${({open})=>open?"0":"-100%"};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        z-index: 10;
        background-color: #4CAF50;


    }
`;
export const MenuItem = styled.li`
    height: 100%;
    @media screen and (max-width: 1074px){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: ce;
        align-items: center;


    }
`;
export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #EEC203;
    font-family: Kraash;
    font-family: Kraash-Black;
    font-size: 0.6rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;
    border-radius: 10px;

    &:hover{
        font-family: Kraash;

        transition: 0.5s all ease;


    }
    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .category{
        display: none;
        margin-right: 0.5rem;
    }

    @media screen and (max-width: 1074px){
        width: 95%;
        color: #475F2A;
        transition: 1s all ease;
        font-size: 1.5rem;

        &:hover{
            font-family: Kraash;
            background-color: #FFEB3B;
            color: #EEC203;
            transition: 1s all ease;
            box-shadow: 10px 10px 0px #EEC203;    
        }
        div{
            width: 95%;
            justify-content: left;
            .category{
                display: flex;
                
            }

        }
    }
`;



export const MobileIcon = styled.div `
    display: none;
    @media screen and (max-width: 1074px){
        display: flex;
        align-items: center;
        cursor: pointer;
        svg{
            fill: #EEC203;
            margin-right: 0.5rem;
        }
    }

`;


