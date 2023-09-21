import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../utils/constants'
import { AuthContext } from '../utils/AuthContext'
import swal from 'sweetalert'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else if (409 === response.status) {
          throw new Error('User already exists. Please choose another name or email')
        }
        throw new Error('Unable to fetch. Unexpected error')
      })
      .then((data) => {
        console.log(data)
        setAuthenticated(true)
        swal('Success!', 'Your account has been successfully created.', 'success')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error.response)
        swal('Email already exist', 'Try again', 'error')
        // navigate('/login')
      })
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-item-center">
        <div className="d-flex justify-content-center align-item-center w-25 p-4 border shadow-sm m-5 rounded bg-light">
          <Form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
            <div className="d-flex flex-column">
              <Button variant="dark" type="submit" className="mb-3">
                Sign Up
              </Button>
              <p>
                Already have an account? <a href="/signup">Login Here</a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Signup
