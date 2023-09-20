import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function BasicExample() {
  // const user =  useContext(userContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        {/* {user ? null : <div></div>} */}
        <Navbar.Brand href="#home">Review App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="singup">SingUp</Nav.Link>
            <Nav.Link href="dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BasicExample
