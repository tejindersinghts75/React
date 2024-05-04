import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { auth, db } from "../../Firebase"
import { push,ref } from "firebase/database";

const PostCard = ({ image, username, text, likes, comments }) => {
  const [ value, setValue] = useState({post:''})
  const handleChangel=(e)=>{
    setValue({...value, [e.target.name]: e.target.value})
  }
  console.log(value)
  const addPost=(e)=>{
    e.preventDefault()
  try {
    const dbRef = ref(db, 'posts')
    push(dbRef , value)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
        <div>
          <form>
          <input type='text' name='post' placeholder='Whats in your mind' onChange={handleChangel}/>
          {/* <input type='file' name='image' placeholder='Upload Image' onChange={handleChangel}/> */}
          <button onClick={addPost}>Post</button>
          </form>
        </div>

    </div>
  );
};

export default PostCard;
