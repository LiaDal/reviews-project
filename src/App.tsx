import React from 'react';
import SearchBar from "./Components/SearchBar";
import Review from "./Components/Reviews";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Login />
      <SearchBar />
      <Review />
    </>
  );
}

export default App;
