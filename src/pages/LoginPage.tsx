import React, { useState } from 'react';
import Login from '../Components/Login';
import Navbar from '../Components/Navbar';
import App from '../App';
import Dashboard from './Dashboard';

export default function LoginPage() {
  const [token, setToken] = useState();

  if(!token) {
    return (
    <>
      <Navbar />
      <Login setToken={setToken} />
    </>
  )}

  return (
    <>
      <Dashboard />
    </>
  )
}
