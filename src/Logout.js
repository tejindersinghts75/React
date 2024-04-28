import React from 'react'
import { useDispatch } from 'react-redux'
import { loginL } from './Features/AddtoCart/AddToCart'
import { useNavigate } from 'react-router-dom'

function Logout() {

    let dispatch = useDispatch()
    let navigate = useNavigate()
    const logout = ()=>
    {
        localStorage.removeItem("token")
        navigate('/login')
        dispatch(loginL(false))
    }
    
  return (
    <div>
        <button onClick={logout} >Logout</button>
    </div>
  )
}

export default Logout