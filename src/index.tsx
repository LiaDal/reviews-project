import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SingupPage from './pages/SingupPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/singup" element={<SingupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
