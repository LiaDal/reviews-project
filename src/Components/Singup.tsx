import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar'
import { API_URL } from '../utils/constants'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
        // localStorage.setItem('me', ...)
      })
      .catch((error) => {
        console.log('err: ', error)
      })
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-item-center">
        <div className="d-flex justify-content-center align-item-center w-25 p-4 border shadow-sm m-5 rounded">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
