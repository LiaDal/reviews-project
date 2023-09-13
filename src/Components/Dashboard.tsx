import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

export default function Dashboard() {
  const navigate = useNavigate();

//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           const uid = user.uid;
//           console.log("uid", uid)
//         } else {
//           console.log("user is logged out")
//         }
//       });
     
// }, [])

const handleLogout = () => {               
  signOut(auth)
    .then(() => {
      navigate("/");
      console.log("Signed out successfully")
  })
    .catch((error) => {
      console.log("error: ", error)
  });
}
  
  return (
    <>
      <Navbar/>
      <h2 className="d-flex justify-content-center mt-5">Dashboard user</h2>
      <div className="d-flex justify-content-end">
      <Button onClick={handleLogout} variant="secondary" type="submit" className="me-5">
            Log out
      </Button>
      </div>
    </>
  );
}

