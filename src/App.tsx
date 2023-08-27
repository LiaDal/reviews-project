import React, { useState } from 'react';
import SearchBar from "./Components/SearchBar"
import Reviews from "./Components/Reviews"
import ModalLogin from "./Components/Modal"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ModalLogin />
      <SearchBar />
      <Reviews />
    </>  
  );
}

export default App;
