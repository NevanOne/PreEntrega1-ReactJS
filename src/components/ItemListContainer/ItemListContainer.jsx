import React, { useEffect, useState } from 'react';
import {ImSpinner2} from 'react-icons/im'
// import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoriaId} = useParams()

  /*     setLoading(true)
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
        .finally(() =>{setLoading(false)}) */

        useEffect(() =>{
          setLoading(true)
          const db = getFirestore()
      
          const productos = categoriaId
            ?db.collection('productos').where('categoria', '==', categoriaId)
            : db.collection('productos')
            productos.get()
            .then((res) => {
                    const newItem = res.docs.map((doc) => {
                      return { id: doc.id, ...doc.data() };
                    });
                    console.table(newItem);
                    setItems(newItem);
                  })
                  .catch((err) => console.log(err))
                  .finally(() => {
                    setLoading(false);
                  });
    //obtener mediante promesa simple
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
