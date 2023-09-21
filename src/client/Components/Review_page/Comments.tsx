import React from 'react'
import Card from 'react-bootstrap/Card'

function Comments() {
  return (
    <Card className="m-5" style={{ width: '20rem', height: '12rem' }}>
      <Card.Body>
        <Card.Title>Jhon Doe</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">20 October, 2022</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Comments
