import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Rating from './Rating';
import book from '../Components/book.jpg';

function Review() {
  const [review, setReview] = useState<any[]>([])

  useEffect(() => {
    fetch("http://localhost:8485/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
        console.log(review);
      });
  }, []);
  return (
    <>
      <div>{review.map((obj) => (
        <div className="d-flex justify-content-around">
          <Card key={obj.id} className="w-25 p-3 mt-5">
            <Card.Header as="h5">{obj.title}</Card.Header>
            <img src={book} className="img-responsive" alt="pic"></img>
            <p>{obj.groups}</p>
            <p>{obj.tags}</p>
            <Card.Body>
              <Card.Title>Keith Houston "Book"</Card.Title>
              <Card.Text>
                {obj.content}
              </Card.Text>
              <h3>{obj.rating}</h3>
              <Button variant="primary">View Review</Button>
              <Rating />
            </Card.Body>
          </Card>
        </div>
      ))}</div>
    </>
  );
}

export default Review;
