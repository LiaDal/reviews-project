import React from 'react'
import SearchBar from './Components/SearchBar'
import Review from './Components/Reviews'
import Navbar from './Components/Navbar'
import TagsCloud from './Components/TagsCloud'
import 'bootstrap/dist/css/bootstrap.min.css'

// react context => localStorage.getItem('me')
// <UserContext.Provider></<UserContext.Provider>

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Review />
    </>
  )
}

export default App
