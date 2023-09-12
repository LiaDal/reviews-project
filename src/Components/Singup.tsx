import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';

export default function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false) };
  const handleShow = () => { setShow(true) };
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    async function fetchData() {
      const response = await fetch(
        `http://http://localhost:5173/singup`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              password: "password",
              email: "email",
              name: "name"
            }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        });
    }
    fetchData()
  };

  
  return (
    <div className="d-flex justify-content-center">
    <div className="d-flex justify-content-center align-item-center w-25 p-4 border shadow-sm m-5 rounded">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button onSubmit={handleSubmit} variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
    </div>
    </div>
  );
}
