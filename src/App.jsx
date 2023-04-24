import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movie from './Components/Movie'
import Movies from './Components/Movies'
import Nav from './Components/Nav'
import "./App.css"
import Login from './Components/Login'
const App = () => {

  return <div className='container'>
    <Nav />
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/login' element={<Login />} />
      <Route path='/movie/:id' element={<Movie />} />
    </Routes>
  </div>
}

export default App