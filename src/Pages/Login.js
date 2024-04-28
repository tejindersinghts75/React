import React, { useEffect, useState } from 'react';
import { loginL } from '../Features/AddtoCart/AddToCart'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState({ email: "", password: "" })
  const [btn, setBtn] = useState(true)
  const [loading, setLoading] = useState(false)
  const [token, setToken] =  useState()


  const navigate = useNavigate()

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })

  }

  const validation = () => {

    const errors = []
    if (!data.email || data.email > 3 || data.email < 10) {
      errors.email = "Please enter username correctly"
    }
    if (!data.password || data.password > 3 || data.password < 10) {
      errors.password = "Please enter password correctly"
    }

    console.log("errorarray", errors)
    const isEmtpy = Object.keys(errors).length === 0
    
    if (isEmtpy) {
      setBtn(false)
    }
  }


  useEffect((data) => {
    console.log(data)
    validation()
  }, [data])

  const dispatch = useDispatch()

  const login = async (e) => {
    // let token = true;
    // navigate('/')
    // dispatch(loginL(token))
    // let email = data.email;
    // let password = data.password;

    //   const loginUser = await fetch('http://localhost:4200/login',{
    //     method : 'POST',
    //     body: JSON.stringify({email, password}),
    //     headers:
    //     {
    //       'Content-Type':'applications/json'
    //     }

    //   });
    //   let result = await loginUser.json()
    //   console.log(result)
    //   if(result.Firstname)
    //   {
    //     // alert("succesful")
    //     // navigate('/dashboard')
    //   }
    //   else
    //   {
    //     console.log("Not allowed")
    //   }
      
            
                                                                                                                             

    e.preventDefault();
    setLoading(true)
    
    localStorage.setItem("token", true)

    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("You are succesfully signed in")
        let token = true;
    navigate('/dashboard')
    dispatch(loginL(token))

        // console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        setLoading(false)
        toast("Incorrect Credentials")
    });
  }

  const { loginToken } = useSelector((store) => store.todoSlice)
  console.log(loginToken)
 

  return (
    // <div style={{ display: "flex", flexDirection: 'column', width: "500px", gap: "10px", margin: "auto" }}>
    //   <input type='email' name="username" onChange={onchangeHandler} />
    //   <input type='text' name="password" onChange={onchangeHandler} />
    //   <Button disabled={btn} onClick={login}>Submit</Button>


    // </div>
    <div>
<ToastContainer/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <TextField
        required
        name="email"
        onChange={onchangeHandler}
        id="outlined-required"
        label="email"
        style={{marginBottom:"30px"}}
      />

      <TextField
        required
        name="password"
        onChange={onchangeHandler}
        id="outlined-required"
        label="Password"
        style={{marginBottom:"30px"}}
      />

     

     
      <MDBBtn className="mb-4" disabled={btn} onClick={login} >{loading ? "Loading..." : "Sign In"}</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="/Signup">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm" />
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
    </div>
  );
}

export default App;