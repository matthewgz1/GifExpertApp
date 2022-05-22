import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (categorias) => {

const [state, setState] = useState({

    data: [],
    loading : true
    
    
});

    useEffect( () => {

        getGif( categorias)
            .then (imgs =>{
                setState({
                    data: imgs,
                    loading: false
                   
                })
                
            });
        
      
    } , [categorias])


    return state; // {data:[], loading:true }
}
