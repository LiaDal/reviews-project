import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar'
import swal from 'sweetalert'
import { API_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        // return response.json()
        if (response.ok) {
          return response.json()
        } else if (401 === response.status) {
          throw new Error('Invalid password or email')
        }
        throw new Error('Unable to fetch. Unexpected error')
      })
      .then((userData) => {
        console.log(userData)
        swal('Success!', 'You have successfully loged in.', 'success')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.error('err: ', error)
        swal('Try again', 'Invalid email or password', 'error')
      })
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-item-center">
        <div className="d-flex justify-content-center align-item-center w-25 p-4 border shadow-sm m-5 rounded">
          <Form onSubmit={handleSubmit}>
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
            <div className="d-flex flex-column">
              <Button onSubmit={handleSubmit} variant="primary" type="submit" className="mb-2">
                Log in
              </Button>
              <p className="text-center">or</p>
              <Button href="singup" variant="success">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}
