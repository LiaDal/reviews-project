import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
       e.preventDefault();

  await fetch('http://localhost:5173/login', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
     name: 'name',
     email: 'email',
     password: 'password',
    })
   })
   .then((response) => response.json())
   .then((userData) => {
     console.log(userData)
   })
   .catch((error) => {
     console.error('err: ', error);
   });
  }

  
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center align-item-center w-25 p-4 border shadow-sm m-5 rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="d-flex flex-column">
          <Button onSubmit={handleSubmit} variant="primary" type="submit" className="ms-5 w-50">
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
    </> 
  );
}
