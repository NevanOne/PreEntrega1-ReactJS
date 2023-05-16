import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id, name, description, price, image, categoria, stock }) => {

  const navigate = useNavigate()

  const volverHaciaAtras = () =>{
    navigate(-1)
  }

  const {addToCart} = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () =>{
        const newItem = {
          id,
          name,
          description,
          image,
          price,
          categoria,
          counter
        }
        console.log(newItem)
        addToCart(newItem)
  }



  return (
    <div className='item'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error totam quibusdam doloribus, alias aperiam exercitationem laboriosam illum similique eos, delectus vitae odit maxime, repellendus iusto quisquam placeat blanditiis. Cupiditate! </p>
          <Card.Title>Categoria: {categoria}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
          <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
        </Card.Body>
        <Button onClick={volverHaciaAtras} className='btn btn-sucess'>Volver atras</Button>
        <Link to='/cart' className='btn btn-info'>
          Ir al Carrito
        </Link>
      </Card>
    </div>
  )
}