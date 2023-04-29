import React, { useEffect, useState } from 'react';
import {ImSpinner2} from 'react-icons/im'
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoriaId} = useParams()


  useEffect(() =>{
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        if(categoriaId){
          setItems(res.filter(prod => prod.categoria === categoriaId)  )
        }else{
          setItems(res)
        }
        // console.log(res) , se consologuea el error
      })
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [categoriaId])




  return (
    <>
    {}
      {
        loading
        ?<div className='spinner'><ImSpinner2/></div>
        : <ItemList productos={items}/>
      }
    </>
  )}
