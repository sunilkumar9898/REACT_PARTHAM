import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <nav className="d-flex">
              <ul className="d-flex gap-5 list-unstyled list-inline">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/user">User</Link>
                  </li>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar
