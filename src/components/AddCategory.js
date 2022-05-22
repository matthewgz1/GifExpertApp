import React, { useState } from 'react'

import PropTypes from 'prop-types';
export const AddCategory = ({setCategorias}) => {

    const [InputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        console.log()
        setInputValue (e.target.value);

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(InputValue.trim().length > 2){

            setCategorias(cats => [ InputValue, ...cats]);
            setInputValue('');
        }
        
        
       
        //console.log('submit')



    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>AddCategory</h2>
        <input
        type = "text"
         value={InputValue}   
         onChange = { handleInputChange }
        />
    </form>
  )
}

export default AddCategory

AddCategory.propTypes ={
    setCategorias: PropTypes.func.isRequired
}