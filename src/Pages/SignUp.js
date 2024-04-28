import React, { useCallback, useEffect, useState } from 'react'
import Textbox from '../Components/Textbox'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../Firebase";
import { push,ref } from "firebase/database";
import { useDispatch } from 'react-redux';
import { loginL } from '../Features/AddtoCart/AddToCart'


function SignUp() {
  const [values, setValues] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "", /*, selectedOption: "", option1: "", option2: ""*/ })
  const [errors, setErrors] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [submitBtn, setSubmitBtn] = useState(true)
  const [loading, setLoading] = useState(false)
  //   const dispatch = useDispatch();
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      label: "Firstname",
      required: true,
      bugs: errors.firstname
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      label: "lastname",
      required: true,
       bugs: errors.lastname,
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "Email",
      required: true,
      bugs: errors.email,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      required: true,
      bugs: errors.password,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirmPassword",
      label: "Confirm Password",
      required: true,
      bugs: errors.confirmPassword,
    },

    //   {
    //     id: 6,
    //     name: "selectedOption",
    //     type: "radio",
    //     value: "option1",
    //     placeholder: "Option1",
    //     label: "India",
    //     checked: values.selectedOption === 'option1',
    //     required: true,

    //   },
    //   {
    //     id: 7,
    //     name: "selectedOption",
    //     type: "radio",
    //     value: "option2",
    //     placeholder: "Option2",
    //     label: "India",
    //     checked: values.selectedOption === 'option2',
    //     required: true,
    //   }
  ]
  const onChange = (e) => {

    setValues({ ...values, [e.target.name]: e.target.value });

    // if(e.target.name === "selectedOption")
    // {
    //   setValues({...values, option1:"", option2:""})
    // }
    // console.log("values123", values)
  }

  

  useEffect(() => {
  
    const newErrors = {};

    if (!values.firstname || values.firstname.length < 3 || values.firstname.length > 16) {
      newErrors.firstname = 'It should be between 3 - 6 characters';
    }
    if (!values.lastname || values.lastname.length < 3 || values.lastname.length > 16) {
      newErrors.lastname = "Lastname consists more than 3 character"
    }
    if (!values.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
      newErrors.email = 'Please enter the valid email';
    }
    if (!values.password || !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,20}$/.test(values.password)) {
      newErrors.password = 'For Eg. Admin@123';
    }

    if (!values.confirmPassword || !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,20}$/.test(values.confirmPassword)) {
      newErrors.confirmPassword = 'For Eg. Admin@123';

    }

    if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = 'Password doesn\'t match';
    }
    setErrors(newErrors)
    console.log(newErrors)
    const isEmpty = Object.keys(newErrors).length === 0;
    //console.log(errors)
    // console.log(values.username)

    if (isEmpty) {
      // console.log('false')
      setSubmitBtn(false);
    }
    else {
      // console.log('false')
      setSubmitBtn(true)
    }

  }, [values])
  const dispatch =  useDispatch()
  const navigate = useNavigate()

  // const collectData = async ()=>
  // {
  //   let Firstname = values.firstname;
  //   let Lastname = values.lastname;
  //   let Email = values.email;
  //   let Password = values.password;


   
  //     let response  = await fetch('http://localhost:4200/create',{
  //       method: 'POST',
  //       body: JSON.stringify({Firstname,Lastname,Email,Password}),
     
  //       headers:{
  //         'Content-Type':'application/json'
  //       }
  //     })
  //     const result = await response.json();
  //     console.log(result)
  //     navigate('/dashboard')
  //     localStorage.setItem("token", true)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // collectData()
    // dispatch(
    //   setsignUp({
    //     firstname : values.firstname,
    //     lastname:values.lastname,
    //     email:values.email,
    //     password:values.password,
    //     confirmPassword:values.confirmPassword,
    //   })
    // )

    try {

      //CREATE NEW USER AND DATA GOES TO AUTHENTICATION
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const user = userCredential.user;
      console.log("User created:", user);

      // Add user data to realtime database
      const dbRef = ref(db, 'Users');

      push(dbRef, values)
        
        .then((newDataRef) => {
          console.log('New data added:', newDataRef.key);
          navigate('/dashboard')
          localStorage.setItem("token", true)
          let token = true
          dispatch(loginL(token))
          return true
        })
        .then (console.log("first"))
        .catch((error) => {
          console.error('Error adding new data:', error);
        });
    }

    catch (err) {
      console.error(err);
      // console.log("Data is not stored in realtime database")
    }
  };




  return (
    <div>
      <div>
        {/* <div style={{display:"flex", position:"fixed", width:"500px", height:"500px", backgroundColor:"black"}}></div>   */}
        <div style={{ marginBottom: "50px" }}>Sign Up </div>
        <form style={{ width: "1000px", display: "flex", flexDirection: "column", margin: "auto" }} /*onSubmit={handleSubmit}*/>
          {inputs.map((input) => (
            <Textbox key={input.id} {...input} onChange={onChange} />

          ))
          }

          <MDBBtn className="mb-4" disabled={submitBtn} onClick={handleSubmit} /*onClick={login}*/ > {loading ? "loading..." : "signUp"} </MDBBtn>


        </form>
      </div>
    </div>
  )
}

export default SignUp