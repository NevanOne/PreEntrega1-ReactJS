import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from '../../firebase/config';
import Swal from 'sweetalert2';

const Checkout = () => {
const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

const [email, setEmail] = useState("")
const [nombre, setNombre] = useState("")
const [apellido, setApellido] = useState("")
const [telefono, setTelefono] = useState("")

//Funcion para manejar el envío

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Nombre:", nombre)
    console.log("Apellido:", apellido)
    console.log("Email:", email)
    console.log("Telefono:", telefono)
    const orden = {
        buyer: {
            nombre,
            apellido,
            email,
            telefono,
        },
        item: carrito,
        total_price: precioTotal(),
        data: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    console.log(orden)
    //funcion para enviar orden a Firebase
    const db = getFirestore()
    const ordenes = db.collection('ordenes')
     ordenes.add(orden)
     .then((res)=>{
        Swal.fire({
            icon: 'success',
            title: 'La compra fue realizada con Exito',
            text: `Guarde su numero de compra : ${res.id}`,
            willClose: () =>{
                vaciarCarrito()
            }
          })
     })
}



  return (
    <div>
    <h3>Terminar Compra</h3>
    <hr />
    <form onSubmit={handleSubmit} className='container mt-3'>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
                <input type='text'className='form-control' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        </div>
        <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
                <input type='text'className='form-control' onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
                <input type='text'className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
            <label htmlFor="telefono">Telefono</label>
                <input type='text'className='form-control'onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <button type='submit' className='btn btn-success'>Finalizar</button>
        <Link to='/cart' className='btn btn-warning'>Volver al Carrito</Link>
    </form>

    </div>
  )
}

export default Checkout;