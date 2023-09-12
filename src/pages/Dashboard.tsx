import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Review from '../Components/Reviews';

export default function Dashboard() {
  
  return (
    <>
      <Navbar/>
      <Review />
    </>
  );
}

