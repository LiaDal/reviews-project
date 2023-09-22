import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../utils/constants'
import { AuthContext } from '../../utils/AuthContext'

const Dashboard = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = async (e) => {
    e.preventDefault()

    await fetch(`${API_URL}/logout`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(() => {
        setAuthenticated(false)
        navigate('/')
      })
      .catch((error) => {
        console.error('err: ', error)
      })
  }

  return (
    <>
      {/* <Header /> => fetch => /me */}
      <Navbar />
      <div className="d-flex justify-content-end m-5">
        <Button onClick={logout} variant="dark">
          Log out
        </Button>
      </div>
    </>
  )
}

export default Dashboard
