import React from 'react'
import Card from 'react-bootstrap/Card'
import image from '../img/book2.png'

function Content() {
  return (
    <Card className="d-flex justify-content-center w-50 m-5 shadow p-3 mb-5 bg-white rounded">
      <Card.Img variant="top" src={image} />
      <Card.Header>tags</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <p>2 days ago</p>
        <p>42 Likes</p>
      </Card.Footer>
    </Card>
  )
}

export default Content
