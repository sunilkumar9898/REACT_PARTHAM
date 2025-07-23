
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {BrowserRouter, Routes , Route, Link} from 'react-router-dom'
import Navbar from './pages/Navbar';
import User from './pages/User';
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from './pages/UserDetails';


function App() {

  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/user/:id" element={<UserDetails />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App
