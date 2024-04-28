import React, { useState, useEffect } from 'react';
import Product from '../Components/Shop/Product';
import '../App.css';
import {  useSelector } from 'react-redux';
import Sidebar from '../Components/Sidebar';

function Shop({showData}) {
  // const [data, showData] = useState([])
  // console.log("Dataproduct",data)


  // const recievedData=(data)=>
  // {
  //     showData(data)
  // }

  return (
    <div className='shop_comp'>
       <Sidebar className="sidebarcomp"/> 
     <Product  /*showData={props.showData}*/ showData={showData} /*sendData={data}*/ /> 
     
    </div>
  );
}

export default Shop;
