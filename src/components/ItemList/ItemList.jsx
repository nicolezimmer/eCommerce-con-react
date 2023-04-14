import React, { useState, useEffect } from 'react'
import { Item } from '../Item/Item'
export const ItemList = ({productos=[]}) => {




    return(
        <div>
            <h3>Productos:</h3>
                {productos.map((item)=><Item {...item} key={item.id} />)}
            
        </div>
        
    )
}

