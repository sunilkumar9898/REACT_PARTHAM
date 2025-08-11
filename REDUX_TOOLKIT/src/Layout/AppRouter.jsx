import React  from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Counter from '../components/Counter'
import Dashboard from '../components/Dashboard'

// const Login = React.lazy(() => import("../components/Login"));
// const Counter = React.lazy(() => import("../components/Counter"));
// const Dashboard = React.lazy(() => import("../components/Dashboard"));
const AppRouter = () => {
  return (
      <div>
          <nav className="bg-gray-100 py-4">
              <ul className="flex justify-center space-x-8">
                  <li>
                      <Link
                          to="/"
                          className="text-gray-700 hover:text-blue-600 font-medium">
                          Home
                      </Link>
                  </li>
                  <li>
                      <Link
                          to="/counter"
                          className="text-gray-700 hover:text-blue-600 font-medium">
                          Counter
                      </Link>
                  </li>
                  <li>
                      <Link
                          to="/dashboard"
                          className="text-gray-700 hover:text-blue-600 font-medium">
                          Dashboard
                      </Link>
                  </li>
              </ul>
          </nav>

          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
  );
}

export default AppRouter
