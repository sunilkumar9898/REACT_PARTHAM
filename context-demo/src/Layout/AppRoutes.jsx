import React from 'react'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Post from '../pages/Post'
const AppRoutes = () => {
  return (
    <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/post' element={<Post />} />
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export default AppRoutes
