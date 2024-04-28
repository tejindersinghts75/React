import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { getDatabase, ref, query, orderByChild, equalTo, onValue } from "firebase/database";
import { auth, db } from "../../Firebase";

const RightSidebar = () => {
  const[profileData, setProfileData]= useState({})
  useEffect(()=>{
    const fetchData = auth.onAuthStateChanged(user =>{
     const email = user.email
     console.log(email)
     if(email)
     {
       
       const userId = user.uid;
   
       const base = ref(db, 'Users');
       const getId = query(base , orderByChild('email'), equalTo(email))
       
       const output  = onValue(getId , (snapshot) =>{
          const result = snapshot.val()
         
          if(result){
           const output =Object.values(result)[0]
         
           setProfileData(output)
         
          }  
         
       })  
     }
    })
     
 },[])
 console.log(profileData)
  return (
    <div className="RightSidebar">
      <Card>
        <Card.Body>
          
          <h5>{profileData.firstname}</h5>
          <p>User Bio or Description</p>
         
        </Card.Body>
        <Card.Body>
          <img src="user-avatar.jpg" alt="User Avatar" className="avatar" />
          <h5>User Name</h5>
          <p>User Bio or Description</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Posts: 100</li>
            <li className="list-group-item">Followers: 1000</li>
            <li className="list-group-item">Following: 500</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightSidebar;
