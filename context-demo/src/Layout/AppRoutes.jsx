import React from 'react'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Post from '../pages/Post'
import Protected from './Protected'
import PageNoteFound from '../pages/PageNoteFound'
const AppRoutes = () => {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/secure" element={<Protected />}>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="post" element={<Post />} />
                  </Route>
                  <Route path="*" element={<PageNoteFound />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default AppRoutes
