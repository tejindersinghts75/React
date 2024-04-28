import React, { useState } from 'react'
import "../App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Textbox(props) {
 console.log(props.error)
  const {/*label, errorMessage,error,checked, onChange , id,*/ ...inputProps} = props;
  const[focused, setFocused] = useState(true);
  const[showError, setShowError]= useState("none")

  const handleFocused = (e) =>
  {
    setShowError("block")
  }
  const handleFocus = (e)=>
  {
    console.log("Input field is focused")
  
  }
  return (
    <div>
      
         <TextField
             
          {...inputProps} /* onChange={props.onChange} */onBlur={handleFocused} onFocus={handleFocus}
          style={{width:"100%", marginBottom:"25px  "}}
        
        />
      <p style={{color:"red", textAlign:"left", marginTop:"-20px", display:showError}}>{showError && props.bugs}</p>

    </div>
  )
}

export default Textbox