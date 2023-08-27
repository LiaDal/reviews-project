import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export default function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="position-absolute top-0 end-0 m-2 p-2" variant="primary" onClick={handleShow}>
        Sing in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="login template d-flex justify-content-center align-items-center 200-w">
      <div className="50-w p-4">
        <form>
          <div className="mb-2">
            <label htmlFor="email" className="text-dark">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control"/>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-dark">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control"/>
          </div>
          <div>
            <input type="checkbox" className="custom-control custom-ckeckbox" id="check"/>
            <label htmlFor="check" className="custom-input-label ms-2 text-dark">Remember me</label> 
          </div>
          <div className="d-grid">
            <button className="mt-2 btn btn-primary">Log in</button>
            <Link to="/signup" className="ms-2 text-primary">Sign up</Link>
          </div>
        </form>
      </div>
    </div>  
        </Modal.Body>
      </Modal>
    </div>
  );
}