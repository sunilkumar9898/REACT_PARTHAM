
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import UserDetails from "./pages/UserDetails";
import User from "./pages/User";


import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {


  return (
      <>
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
                  <Route path="/post" element={<User />} />
                  <Route path="/post/:id" element={<UserDetails />} />
              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App
