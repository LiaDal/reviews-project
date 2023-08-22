import React from "react";
import { Link } from "react-router-dom";

function Signup() {

  return (
    <div className="signup template d-flex justify-content-center align-items-center 200-w bg-dark">
      <div className="50-w p-4">
        <form>
          <h3 className="text-light">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="name" className="text-light">Name</label>
            <input type="text" placeholder="Enter Your Name" className="form-control"/>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="text-light">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control"/>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-light">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control"/>
          </div>
          <div>
            <input type="checkbox" className="custom-control custom-ckeckbox" id="check"/>
            <label htmlFor="check" className="custom-input-label ms-2 text-light">Remember me</label> 
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign Up</button>
            <p className="mt-2 text-light">
              Already registered?  
              <Link to="/" className="ms-2 text-primary">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;