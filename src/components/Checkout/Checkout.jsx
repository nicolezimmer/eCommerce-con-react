import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../../firebase/config'

export const Checkout = () => {

    const {carrito, precioTotal, vaciarCarrito}=useContext(CartContext)
    const [email, setEmail]= useState("")
    const [nombre, setNombre ]= useState("")
    const [apellido, setApellido ]= useState("")
    const [telefono, setTelefono ]= useState(0)
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log("Email:", email)
    }
    const orden ={
        buyer: {
            email,
            nombre,
            apellido,
            telefono
        },
        item: carrito,
        total_price: precioTotal(),
        data: firebase.firestore.Timestamp.fromDate(new Date())
    }
    const bd = getFirestore();
    const ordenes = bd.collection('ordenes');
    ordenes.add(orden)
        .then((res) => {
        
      })
      .catch((error) => console.log(error))
        
  return (
    <div>
        <h3>terminar compra</h3>
        <hr />
        <form onSubmit={handleSubmit} className='container mt-3'>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>

            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>

            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" className="form-control" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>

            </div>
            <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input type="number" className="form-control" onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>

            </div>
            <button type='submit' className='btn btn-success'>Finalizar</button>
            <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>

        </form>
    </div>
)
}
