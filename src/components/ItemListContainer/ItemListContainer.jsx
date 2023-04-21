import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from '../ItemList/ItemList'
import {ImSpinner3} from 'react-icons/im'
import { useParams } from 'react-router-dom'

export const ItemListContainer = (props) => {

  const [items, setItems]= useState([])
  const [loading, setLoading] =useState(false)
  //useParams es un hook propio de react router dom
  const {categoryId} = useParams()
  useEffect(()=>{
    setLoading(true)
    pedirProductos()
    .then((res)=>{
      if(categoryId){
        setItems(res.filter(prod=>prod.category === categoryId))

      } else setItems(res)

    })
    .catch((error)=>console.log(error))
    .finally(() => setLoading(false))
  }, [categoryId])
  return (
    <div>
    {loading ? (
      <div className='spinner'><ImSpinner3/></div>
    ) : (
      <ItemList productos={items}/>
    )}
  </div>
  )
}

