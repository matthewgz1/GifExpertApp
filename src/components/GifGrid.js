import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import React, { useState ,useEffect} from 'react'
//import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
//import { getGif } from '../helpers/getGifs'

const GifGrid = ({categorias}) => {

    // const [image, setImages] = useState([])
  const {loading,data:images} =  useFetchGifs(categorias);

  //console.log(data);
 // console.log(loading);
    // useEffect( () => {

    //     getGif (categorias)
    //                 .then(setImages)
    // } , [categorias])

    

  return (
    <>
        <h3>{ categorias }</h3>

        { loading&& <p>Loading</p>} 
        <div className='card-grid'>
            
        
                {
                    images.map ( img => (
                    <GifGridItem 

                        key = {img.id}
                        {...img}
                    //    img = {img} 
                    />
                    ))
                }
            
        </div>
    </>
  )
}

GifGrid.propTypes = {}

export default GifGrid