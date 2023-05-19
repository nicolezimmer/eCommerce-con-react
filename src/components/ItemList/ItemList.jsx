import React, { useState, useEffect } from 'react'
import { Item } from '../Item/Item'
import './itemlist.css'
export const ItemList = ({productos=[]}) => {

    return(
        <div className='container'>
            <div className='fila'>
                {productos.map((item)=><Item {...item} key={item.id} />)}
            </div>
            
        </div>
        
    )
}

