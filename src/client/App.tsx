import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './Routes'
import { AuthProvider } from './utils/AuthContext'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
