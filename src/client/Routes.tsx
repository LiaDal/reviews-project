import React, { useContext } from 'react'
import { Navigate, Outlet, BrowserRouter } from 'react-router-dom'
import { AuthContext } from './utils/AuthContext'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/User_page/Dashboard'
import ReviewPage from './Components/Review_page/ReviewPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)
  console.log('PrivateRoutes render', authenticated)
  if (!authenticated) return <Navigate to="/login" replace />
  return <Outlet />
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/review" element={<ReviewPage />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/userpage" element={<UserPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
