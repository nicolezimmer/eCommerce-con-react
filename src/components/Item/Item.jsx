import React from 'react'

export const Item = ({id, description, price, image}) => {
  return (
    <div>
      <h3>Id: {id}</h3>
      <p>Precio:{price}</p>
      <p>Descripcion:{description}</p>
      <img src="" alt="" />
    </div>
  )
}
