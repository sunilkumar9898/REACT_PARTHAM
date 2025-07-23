import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()

  return (
      <div>
          <button >Login</button>
          <button onClick={() => navigate("/SignUp")}>Sign Up</button>
      </div>
  );
}

export default Home
