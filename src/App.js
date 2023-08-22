import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from "./Components/SearchBar"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <SearchBar/>
    </BrowserRouter>
    
  );
}

export default App;
