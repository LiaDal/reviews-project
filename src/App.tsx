import React from 'react';
import SearchBar from "./Components/SearchBar";
import Reviews from "./Components/Reviews";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Login />
      <SearchBar />
      <Reviews />
    </>  
  );
}

export default App;
