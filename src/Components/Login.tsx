import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar'
import {  signInWithEmailAndPassword   } from 'firebase/auth'
import { auth } from '../firebase'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
  
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center">
    <div className="d-flex justify-content-center w-25 p-4 border shadow-sm m-5 rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="d-flex flex-column">
          <Button variant="primary" type="submit" className="ms-5 w-50">
            Log in
          </Button>
          {/* <p className="text-center">or</p>
          <Link to="/singup">
          <Button href="singup"  className="ms-2 text-light btn-success">
            Sign up
          </Button>
          </Link> */}
        </div>
      </Form>
    </div>
    </div>
    </> 
  );
}
