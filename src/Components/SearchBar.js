import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function SearchBar() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm={6}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button>Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  export default SearchBar;