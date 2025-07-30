import React from 'react'
import Home from '../Pages/Home'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from '../Pages/Login'
import SignUP from '../Pages/SignUP'
import CreatePost from '../Pages/CreatePost'
import Post from '../Pages/Post'
import Navbar from '../Pages/Navbar'

const AppRoutes = () => {
  return (
    <div>
          <BrowserRouter>
              <Routes>
                  <Route path={ '/'} element={<Home/>} />
                  <Route path={ '/login'} element={<Login/>} />
                  <Route path={'/signup'} element={<SignUP />} />
                  <Route path={ '/createpost'} element={<CreatePost/>} />
                  <Route path={ '/post'} element={<Post/>} />
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default AppRoutes
