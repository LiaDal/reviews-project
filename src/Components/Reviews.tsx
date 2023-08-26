import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Rating from './Rating';
import book from '../Components/book.jpg';

function Review() {
  return (

    <div className="d-flex justify-content-around">
      <Card className="w-25 p-3 mt-5">
        <Card.Header as="h5">Review name</Card.Header>
        <img src={book} className="img-responsive" alt="pic"></img>
        <Card.Body>
          <Card.Title>Keith Houston "Book"</Card.Title>
          <Card.Text>
            Description
          </Card.Text>
          <h3>9/10</h3>
          <Button variant="primary">View Review</Button>
          <Rating/>
        </Card.Body>
      </Card>
      <Card className="w-25 p-3 mt-5">
        <Card.Header as="h5">Review name</Card.Header>
        <img src={book} className="img-responsive" alt="pic"></img>
        <i className="bi bi-star-fill"></i>
        <Card.Body>
          <Card.Title>Keith Houston "Book"</Card.Title>
          <Card.Text>
            Description
          </Card.Text>
          <h3>9/10</h3>
          <Button variant="primary">View Review</Button>
          <Rating />
        </Card.Body>
      </Card>
      <Card className="w-25 p-3 mt-5">
        <Card.Header as="h5">Review name</Card.Header>
        <img src={book} className="img-responsive" alt="pic"></img>
        <Card.Body>
          <Card.Title>Keith Houston "Book"</Card.Title>
          <Card.Text>
            Description
          </Card.Text>
          <h3>9/10</h3>
          <Button variant="primary">View Review</Button>
          <Rating/>
        </Card.Body>
      </Card>
    </div> 
  );
}

export default Review;