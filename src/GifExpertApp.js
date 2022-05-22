import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

//... (TRES PUNTOS OPERADOR STREED, EXTRAE DEL ARREGLO LO OBJETOS)
// li lista de items *
// ol order list */}
//
const GifExpertApp = props => {
    const [categorias, setCategorias] = useState(['One Punch']) 
//    const handleAdd =  () =>{
         
//         setCategorias([...categorias,'hunter']);
//         //setCategorias(cats => [...cats, 'hunter']); //RENOMBRA LA CATEGOIA
//         //(CATS)  Y LA DEVUELVE CON EL MISMO CATS=CATEGOGIRAS QUE ES EL ESTADO ANTERIOR Y LE AGREGA
//         //EL NUEVO ELEMENTO QUE QUIERE (HUNTER), SIENDO COMPLETO LA SENTENCIA
//         //setCategorias(cats => [...cats, 'hunter']);
            
//     }
   //const categorias = ['One Punch', 'Angel Beast', 'Berserk']
  
  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias = {setCategorias}/>

        <hr></hr>
        
        {/* <button onClick={handleAdd }>Agregar</button> */}
        <ol>
            
            {
                //categorias.map(category =>(
                //<li key = {category}> {category} </li>)
                categorias.map(categorias =>(
                <GifGrid 
                 key = {categorias}
                 categorias =  {categorias}/>
                ))
            }
        </ol>  
    </div>
  )
}



export default GifExpertApp