import React from 'react'
import Wrapper from '../components/Wrapper';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import User from '../pages/User';
import UserDetails from '../pages/UserDetails';

const AppRoutes = () => {
  return (
      <div>
          <BrowserRouter>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                          <Link to="/post">post</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/post" element={<Wrapper />}>
                      <Route path="" element={<User />} />
                      <Route path=":id" element={<UserDetails />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default AppRoutes

