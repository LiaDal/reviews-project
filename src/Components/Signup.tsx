import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export default function ModalSingup() {

  return (
    <div>
      <div className="signup template d-flex justify-content-center align-items-center mt-5">
      <div className="50-w p-4 border border-primary rounded">
        <form>
          <div className="mb-2">
            <label htmlFor="name" className="text-dark">Name</label>
            <input type="text" placeholder="Enter Your Name" className="form-control"/>
          </div>
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
            <button className="btn btn-primary mt-2">Sign Up</button>
            <p className="mt-2 text-dark">
              <Link to="/" className="ms-2 text-primary">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}