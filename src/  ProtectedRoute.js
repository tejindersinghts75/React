import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap';
import {useSelector} from "react-redux"
import {Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {loginToken} = useSelector((store)=>store.todoSlice)
    let location = useLocation()
    const getToken =  localStorage.getItem('token')


   if(!getToken)
   {
    return <Navigate to="/Signup" />
   }
    return children

};

export default ProtectedRoute;