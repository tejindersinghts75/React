import React, { useEffect, useState } from 'react';
import { Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaSearch ,FaTrash  } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import {rangeSlider} from '../Features/AddtoCart/AddToCart'


const Sidebar = () => {
  const [rangeValue, setRangeValue] = useState({sliderValue:"",inputValue:""})
 
  
  const dispatch = useDispatch()
  const { sliderValue } = useSelector((store) => store.todoSlice.valueRange)


  const handleChange = (e)=>
  { 
    setRangeValue({...rangeValue , [e.target.name]: e.target.value})
  }
  const handleDelete =()=>
  {
    dispatch(rangeSlider(false))
    setRangeValue(false)
  }

  useEffect(()=>
  {
    dispatch(rangeSlider({sliderValue:rangeValue.sliderValue ,inputValue:rangeValue.inputValue}))
  },[rangeValue])

  return (
    
    <div className="sidebar">
   <div style={{width:"100%", position:"sticky", top:"50px",  }}>
      <img  style={{width:"100%"}}src="https://alcester.co/wp-content/uploads/2023/09/Group-69-1536x400.png" alt="Logo" className="logo" />

      {/* Navigation */}
   
        
      {/* Search Bar */}
      <Form className="mt-4 flex">
        <FormControl type="text" name='inputValue' placeholder="Search products..." className="mr-sm-2" onChange={handleChange} />
        <input className='rangeslider' type='range' name='sliderValue' value={rangeValue.sliderValue} min="10" max="2000" onChange={handleChange}  />
        <Button variant="outline-primary" className="my-2 text-white border-white" onClick={handleDelete}>Resest All Filters</Button>
      </Form>

      {/* Account & Cart */}
      <div className="d-flex justify-content-between mt-4">
        <Button variant="light"><FaUser /></Button>
        <Button variant="light"><FaShoppingCart /></Button>
      </div>
    
    </div>
    </div>
  );
}

export default Sidebar;
