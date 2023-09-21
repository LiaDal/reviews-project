import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import search1 from './img/search1.png'
import TagsCloud from './TagsCloud'

const SearchBar = () => {
  return (
    <Container className="mt-5 d-flex justify-content-around">
      <div className="flex-column">
        <h1 className="text-capitalize w-75">Read, write and share reviews</h1>
        <Row className="w-100 mt-5 mb-5">
          <Col sm={10}>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button type="submit" className="btn btn-dark">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <TagsCloud />
      </div>
      <img src={search1} className="rounded float-right w-10 z-0 w-50 h-50" alt=""></img>
    </Container>
  )
}

export default SearchBar
