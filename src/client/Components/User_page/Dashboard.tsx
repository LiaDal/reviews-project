import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Button from 'react-bootstrap/Button'
// import { useNavigate } from 'react-router-dom'
// import { API_URL } from '../utils/constants'
// import { AuthContext } from '../utils/AuthContext'

const Dashboard = () => {
  return (
    <>
      {/* <Header /> => fetch => /me */}
      <Navbar />
      <div className="d-flex justify-content-end m-5">
        <Button variant="dark">Log out</Button>
      </div>
    </>
  )
}

export default Dashboard
