import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { AuthContext } from '../utils/AuthContext'

const Navigate = () => {
  const user = useContext(AuthContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Review App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">SignUp</Nav.Link>
            {!user ? null : <Nav.Link href="dashboard">Dashboard</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigate
