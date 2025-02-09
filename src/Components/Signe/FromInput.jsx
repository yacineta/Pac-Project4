import React from 'react'
import './FromInput.css'
import { useState } from 'react';

function FromInput(props) {
    const [focused,setFoucsed] = useState (false);
    const{label, errorMessage, onChange, id, ...inputProps} = props;
    const handleFocus = (e) =>{
        //  setFoucsed(true);
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input className='logic'
         {...inputProps} 
         onChange={onChange} 
         onBlur={handleFocus}
         onFocus={() =>
            inputProps.name==="confirmPasword" && setFoucsed(true) } 
         focused={focused.toString()}
           />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FromInput