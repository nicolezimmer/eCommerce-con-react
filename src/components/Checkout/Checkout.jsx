import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../../firebase/config'
import Swal from 'sweetalert2'

export const Checkout = () => {

    const {carrito, precioTotal, vaciarCarrito}=useContext(CartContext)
    const [email, setEmail]= useState("")
    const [nombre, setNombre ]= useState("")
    const [apellido, setApellido ]= useState("")
    const [telefono, setTelefono ]= useState(0)
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [emailConfirmado, setEmailConfirmado] = useState(false)

    //se ejecuta cuando se envía un formulario, toma un evento "e" como argumento.
    const handleSubmit= (e)=>{
        //evita que el formulario se envíe de forma predeterminada, lo que significa que la página no se recarga después de enviar el formulario.
        e.preventDefault()
        //se crea un objeto llamado "orden" que contiene información sobre la compra
        const orden ={
            buyer: {
                email,
                nombre,
                apellido,
                telefono
            },
            item: carrito,
            total_price: precioTotal(),
            //se guarda la informacion de la hora de compra 
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }

        // se conecta a una base de datos de Firebase,
        const bd = getFirestore();
        // se crea una colección de "ordenes"
        const ordenes = bd.collection('ordenes');
        // y agrega la orden creada anteriormente a la colección. 
        //Si la operación de agregar la orden es exitosa, se muestra un mensaje de éxito utilizando la biblioteca SweetAlert2.
        //Este mensaje incluye un número de compra único generado automáticamente por Firestore y se le pide al usuario que lo guarde.
        // se llama a la función "vaciarCarrito" para vaciar el carrito de compras.
        //Si la operación falla, se muestra un mensaje de error en la consola del navegador.
        ordenes.add(orden)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue realizada con exito',
                    text: `Guarde su numero de compra ${res.id}`,
                    footer: '<a href="">Why do I have this issue?</a>',
                    willClose: ()=>{
                        vaciarCarrito()
                    }
                  })
          })
          .catch((error) => console.log(error))
          .finally(()=>{
            console.log("compra exitosa")
          })

        // Utiliza un método forEach() para iterar sobre cada elemento del arreglo carrito.
        carrito.forEach((item)=>{
            //Por cada elemento item en el arreglo carrito, 
            //se crea una referencia a un documento en la colección productos de la base de datos, 
            //utilizando el método doc() del objeto db. El ID del documento es item.id.
            const docRef = bd.collection('productos').doc(item.id)
            
            //Se llama al método get() en la referencia del documento, 
            //que devuelve una promesa que se resuelve con un objeto doc. 
            //El objeto doc contiene los datos del documento en la base de datos en ese momento.
            docRef.get()
                .then((doc)=>{
                    //se actualiza el valor de la propiedad stock del documento,
                    //restando el valor de la propiedad counter de item (que representa la cantidad de productos que se agregaron al carrito).
                    //El método update() actualiza los datos del documento en la base de datos con los nuevos valores especificados. 
                    docRef.update({
                        stock: doc.data().stock-item.counter
                    })
                })
          })
    }
    return (
        <div>
          <h3>terminar compra</h3>
          <hr />
          <form onSubmit={handleSubmit} className='container mt-3'>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="form-group">
                <label htmlFor="emailConfirmacion">Confirmacion Email</label>
                <input type="text" className="form-control" onChange={(e) => {
                    setEmailConfirmacion(e.target.value)
                    setEmailConfirmado(email === e.target.value)}
                } value={emailConfirmacion} />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input type="number" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
            </div>
            {
              (email && emailConfirmacion && nombre && apellido && telefono && emailConfirmado)
              ? <button type='submit' className='btn btn-success'>Finalizar Compra</button>
              : <button type='submit' className='btn btn-success' disabled>Finalizar Compra</button>
            }
            <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>
          </form>
        </div>
      );
}
