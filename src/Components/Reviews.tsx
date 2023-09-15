import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from 'react'
import Rating from './Rating'
import book from '../Components/book.jpg'

function Review() {
  const [review, setReview] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:8485/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
      })
  }, [])
  return (
    <>
      <div>
        {review.map((obj) => (
          <React.Fragment key={obj.id}>
            <div className="d-flex justify-content-around">
              <Card className="w-25 p-3 mt-5">
                <Card.Header as="h5">{obj.title}</Card.Header>
                <Card.Img variant="top" src={book} />
                <ListGroup variant="flush">
                  <ListGroup.Item>{obj.groups}</ListGroup.Item>
                  <ListGroup.Item>{obj.tags}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Title>{obj.name}</Card.Title>
                  <Card.Text>{obj.content}</Card.Text>
                  <Card.Title className="d-flex justify-content-end">{obj.rating}</Card.Title>
                  <Button variant="primary">View Review</Button>
                  <Rating />
                </Card.Body>
              </Card>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Review
